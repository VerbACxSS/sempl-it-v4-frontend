import {AfterViewInit, Component} from '@angular/core';
import {ItButtonDirective, ItIconComponent} from 'design-angular-kit';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-support',
  styleUrl: './support.component.scss',
  templateUrl: './support.component.html',
  imports: [
    ItIconComponent,
    ItButtonDirective
  ]
})
export class SupportComponent implements  AfterViewInit {

  public constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

  public sendMail(): void {
    window.location.href = 'mailto:sempl.it.assistenza@gmail.com';
  }
}
