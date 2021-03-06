import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  Inject,
} from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { DeviceDetectorService } from 'ngx-device-detector';
import CELLS from 'vanta/dist/vanta.cells.min';
import { DOCUMENT } from '@angular/common';

declare const VANTA: any;

@Component({
  selector: 'her-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private primeConfig: PrimeNGConfig,
    private deviceDetector: DeviceDetectorService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.animate = false;
    this.hideOverlay = false;
    this.removeElement = false;
    this.removeElementLast = false;

    this.iframe = (() => {
      try {
        if (window.self !== window.top) {
          let html = this.document.querySelector('html') as HTMLHtmlElement;

          html.setAttribute('style', 'font-size: 3.5vw !important');
        }
        return false;
      } catch (e) {
        return true;
      }
    })();
  }

  animate: boolean;
  hideOverlay: boolean;
  removeElement: boolean;
  removeElementLast: boolean;
  iframe: boolean;

  @ViewChild('bgWrap') bgWrap: ElementRef;

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }

  ngAfterViewInit(): void {
    if (this.document.body.clientWidth > 1000) {
      console.log('desktop or tablet');

      CELLS({
        el: this.bgWrap.nativeElement,
        color1: 0x26b97f,
        color2: 0x38c3c3,
        size: 2,
        scale: 1,
        scaleMobile: 3,
      });
    } else {
      console.log('mobile');
      CELLS({
        el: this.bgWrap.nativeElement,
        color1: 0x26b97f,
        color2: 0x38c3c3,
        size: 0.5,
        scale: 1,
        scaleMobile: 3,
      });
    }
  }

  onTransitionEnd(event: any) {
    if (event != null && event.propertyName) {
      switch (event.propertyName) {
        case 'width':
          this.hideOverlay = true;
          this.removeElement = true;
          break;
        case 'opacity':
          this.removeElementLast = true;
          break;
      }
    }
  }

  begin() {
    this.animate = true;
  }
}
