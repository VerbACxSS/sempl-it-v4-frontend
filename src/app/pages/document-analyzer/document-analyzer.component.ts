import {AfterViewInit, Component} from '@angular/core';
import {ItButtonDirective, ItCheckboxComponent, ItIconComponent, ItTextareaComponent} from 'design-angular-kit';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormUtils} from '../../utils/FormUtils';
import {AnalysisService} from '../../services/analysis.service';
import {TextMetrics} from '../../model/Metrics';
import {AlertService} from '../../services/alert.service';
import {TextMetricsComponent} from '../../components/text-metrics/text-metrics.component';
import {SeoService} from '../../services/seo.service';
import {AnalysisTutorialModalComponent} from '../../components/modals/analysis-tutorial-modal/analysis-tutorial-modal.component';

@Component({
  selector: 'app-document-analyzer',
  styleUrl: './document-analyzer.component.scss',
  templateUrl: './document-analyzer.component.html',
  imports: [
    ItButtonDirective,
    ReactiveFormsModule,
    ItTextareaComponent,
    TextMetricsComponent,
    ItCheckboxComponent,
    AnalysisTutorialModalComponent,
    ItIconComponent,
  ]
})
export class DocumentAnalyzerComponent implements AfterViewInit {
  protected readonly FormUtils = FormUtils;

  public analyzerForm: FormGroup;

  public text!: string;
  public result!: TextMetrics;


  constructor(private seoService: SeoService,
              private alertService: AlertService,
              private analysisService: AnalysisService) {
    this.analyzerForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.maxLength(3000)]),
      consent: new FormControl(true, [Validators.required])
    });
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

  public fieldLengthDescription(field: string): string {
    const fieldLength = this.analyzerForm.get(field)?.value.length;
    return fieldLength ? `${fieldLength}/3000` : '';
  }

  public analyze(): void {
    this.analyzerForm.markAllAsTouched();
    if (this.analyzerForm.invalid) {
      this.alertService.showError('Errore', 'Compilare tutti i campi');
      return;
    }

    const textToAnalyze = this.analyzerForm.value.text;
    const consent = this.analyzerForm.value.consent;
    this.analysisService.textAnalysis(textToAnalyze, consent)
      .subscribe({
        next: (result) => {
          this.text = textToAnalyze;
          this.result = result.textEvaluation;
        },
        error: (error) => {
          this.alertService.showError('Errore', "Si è verificato un errore durante l'analisi del testo. Riprova più tardi.");
        }
      });
  }

}
