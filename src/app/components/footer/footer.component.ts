import {Component} from '@angular/core';
import {ItFooterComponent} from 'design-angular-kit';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
  imports: [
    NgOptimizedImage,
    ItFooterComponent,
  ]
})
export class FooterComponent {
  public MENU_ITEMS: Array<any> = [
    {name: 'Home', path: '/home'},
    {name: 'Semplifica', path: '/ats'},
    {name: 'Analizza', path: '/document-analyzer'},
    {name: 'Confronta', path: '/documents-comparison'},
    {name: 'Assistenza', path: '/support'}
  ];

  public SMALL_LINK_ITEMS: Array<any> = [
    {name: 'Privacy Policy', path: '/privacy-policy'},
    {name: 'Mappa del sito', path: '/sitemap'},
  ];

  constructor(public router: Router) {
  }
}
