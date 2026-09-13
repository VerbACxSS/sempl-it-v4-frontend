import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private router: Router,
              private metaService: Meta,
              private titleService: Title,
              @Inject(DOCUMENT) private document: Document) {
  }

  public updateSeoSettings(): void {
    this.updateCanonicalUrl(environment.FRONTEND_URL + this.router.url)

    switch (this.router.url) {
      case '/home':
        this.titleService.setTitle('SEMPL-IT – Home');
        this.metaService.updateTag({
          name: 'description',
          content: 'SEMPL-IT è un progetto di ricerca PRIN 2022 che si propone di sviluppare un software open source per la semplificazione linguistica della comunicazione amministrativa.'
        });
        break;

      case '/ats':
        this.titleService.setTitle('SEMPL-IT – Software ATS');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il software ATS (Automated Text Simplification) è un software open source per la semplificazione linguistica della comunicazione amministrativa.'
        });
        break;

      case '/document-analyzer':
        this.titleService.setTitle('SEMPL-IT – Analizzatore di documenti');
        this.metaService.updateTag({
          name: 'description',
          content: 'L\'analizzatore di documenti è un software che permette di analizzare un documento.'
        });
        break;

      case '/documents-comparison':
        this.titleService.setTitle('SEMPL-IT – Confronto documenti');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il confronto documenti è un software che permette di confrontare due documenti e visualizzare le differenze tra di essi.'
        });
        break;

      case '/support':
        this.titleService.setTitle('SEMPL-IT – Assistenza');
        this.metaService.updateTag({
          name: 'description',
          content: 'Per qualsiasi problema o richiesta di supporto, puoi contattarci via email all\'indirizzo'
        });
        break;

      case '/sitemap':
        this.titleService.setTitle('SEMPL-IT – Mappa del sito');
        this.metaService.updateTag({name: 'description', content: 'Mappa del sito'});
        break;

      case '/privacy-policy':
        this.titleService.setTitle('SEMPL-IT – Privacy Policy');
        this.metaService.updateTag({name: 'description', content: 'Privacy Policy'});
        break;
    }
  }

  private updateCanonicalUrl(url: string) {
    const link: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);

    link.setAttribute('href', url);
  }
}
