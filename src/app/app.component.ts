import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import CELLS from 'vanta/dist/vanta.cells.min';

declare const VANTA: any;

@Component({
  selector: 'her-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private primeConfig: PrimeNGConfig) {}

  @ViewChild('bgWrap') bgWrap: ElementRef;

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }

  ngAfterViewInit(): void {
    CELLS({
      el: this.bgWrap.nativeElement,
      color1: 0x26b97f,
      color2: 0x38c3c3,
      //   size: 2,
      scale: 1,
      scaleMobile: 3,
    });
  }
}
