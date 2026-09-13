import {AfterViewInit, Component} from '@angular/core';
import {ItButtonDirective, ItCheckboxComponent, ItIconComponent, ItTextareaComponent} from 'design-angular-kit';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormUtils} from '../../utils/FormUtils';
import {AlertService} from '../../services/alert.service';
import {AnalysisService} from '../../services/analysis.service';
import {TextComparatorComponent} from '../../components/text-comparator/text-comparator.component';
import {DiffMetrics, SimilarityMetrics, TextMetrics} from '../../model/Metrics';
import {SeoService} from '../../services/seo.service';
import {ComparisonTutorialModalComponent} from '../../components/modals/comparison-tutorial-modal/comparison-tutorial-modal.component';

@Component({
  selector: 'app-document-comparison',
  styleUrl: './document-comparison.component.scss',
  templateUrl: './document-comparison.component.html',
  imports: [
    ItButtonDirective,
    ItTextareaComponent,
    ReactiveFormsModule,
    TextComparatorComponent,
    ItCheckboxComponent,
    ComparisonTutorialModalComponent,
    ItIconComponent,
  ]
})
export class DocumentComparisonComponent implements AfterViewInit {
  protected readonly FormUtils = FormUtils;

  public analyzerForm: FormGroup;

  public text1!: string;
  public text2!: string;
  public metrics1!: TextMetrics;
  public metrics2!: TextMetrics;
  public similarity!: SimilarityMetrics;
  public diff!: DiffMetrics;

  constructor(private seoService: SeoService,
              private alertService: AlertService,
              private analysisService: AnalysisService) {
    this.analyzerForm = new FormGroup({
      text1: new FormControl('', [Validators.required, Validators.maxLength(3000)]),
      text2: new FormControl('', [Validators.required, Validators.maxLength(3000)]),
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

  public compare(): void {
    this.analyzerForm.markAllAsTouched();
    if (this.analyzerForm.invalid) {
      this.alertService.showError('Errore', 'Compilare tutti i campi');
      return;
    }

    const text1 = this.analyzerForm.value.text1;
    const text2 = this.analyzerForm.value.text2;
    const consent = this.analyzerForm.value.consent;
    this.analysisService.comparisonAnalysis(text1, text2, consent)
      .subscribe({
        next: (result) => {
          this.text1 = text1;
          this.text2 = text2;
          this.metrics1 = result.metrics1;
          this.metrics2 = result.metrics2;
          this.similarity = result.similarity;
          this.diff = result.diff;
        },
        error: (error) => {
          this.alertService.showError('Errore', "Si è verificato un errore durante l'analisi dei testi. Riprova più tardi.");
        }
      });
  }
}
