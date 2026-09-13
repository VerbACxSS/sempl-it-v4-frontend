import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ItCardComponent} from 'design-angular-kit';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [
    ItCardComponent,
    NgOptimizedImage
  ]
})
export class HomeComponent implements AfterViewInit {

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

}
