import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ItHeaderComponent, ItNavBarItemComponent} from 'design-angular-kit';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  imports: [
    NgOptimizedImage,
    ItHeaderComponent,
    ItNavBarItemComponent
  ]
})
export class HeaderComponent {

  public SOCIAL_LINKS_ITEMS: Array<any> = [
    {name: 'GitHub', icon: 'assets/icons/github.svg', path: 'https://github.com/VerbACxSS', target: '_blank'},
    {name: 'Hugging Face', icon: 'assets/icons/hugging_face.svg', path: 'https://huggingface.co/VerbACxSS', target: '_blank'},
  ];

  public MENU_ITEMS: Array<any> = [
    {name: 'Home', path: '/home'},
    {name: 'Semplifica', path: '/ats'},
    {name: 'Analizza', path: '/document-analyzer'},
    {name: 'Confronta', path: '/documents-comparison'},
    {name: 'Assistenza', path: '/support'}
  ]

  constructor(public router: Router) {
  }
}
