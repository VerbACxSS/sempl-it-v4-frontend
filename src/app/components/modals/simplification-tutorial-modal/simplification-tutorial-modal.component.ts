import {Component, ElementRef, ViewChild} from '@angular/core';
import {ItButtonDirective, ItModalComponent} from 'design-angular-kit';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-simplification-tutorial-modal',
  styleUrl: './simplification-tutorial-modal.component.scss',
  templateUrl: './simplification-tutorial-modal.component.html',
  imports: [
    ItModalComponent,
    ItButtonDirective
  ]
})
export class SimplificationTutorialModalComponent {
  public readonly VIDEO_URL = "https://www.youtube.com/embed/Hq8NjrBiAS8"

  @ViewChild(ItModalComponent) modal!: ItModalComponent;
  @ViewChild('iFrame') iFrame!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer.bypassSecurityTrustResourceUrl(this.VIDEO_URL).toString()
  }

  public open(): void {
    this.modal.toggle();
    this.setVideo();
  }

  public setVideo(): void {
    const iframeElement = this.iFrame.nativeElement as HTMLIFrameElement;
    iframeElement.src = this.VIDEO_URL;
  }
}
