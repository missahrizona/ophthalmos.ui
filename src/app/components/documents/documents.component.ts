import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'her-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  constructor() {
    this.pdfSrc = '../assets/documents/MarkGarciaResume.pdf';
  }

  pdfSrc: string;

  ngOnInit(): void {}
}
