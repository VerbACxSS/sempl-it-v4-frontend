import {AfterViewInit, Component} from '@angular/core';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.component.scss',
  templateUrl: './privacy-policy.component.html',
  imports: []
})
export class PrivacyPolicyComponent implements AfterViewInit {

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

}
