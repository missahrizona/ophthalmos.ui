import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'her-physical-exam-detail',
  templateUrl: './physical-exam-detail.component.html',
  styleUrls: ['./physical-exam-detail.component.scss'],
})
export class PhysicalExamDetailComponent implements OnInit {
  constructor() {}

  pupilBothNormal: boolean;
  pupilBothShape: boolean;
  pupilBothMM: number;
  pupilBothRAPD: boolean;
  pupilBothSynechia: boolean;

  mm: any[] = [...new Array(10)].map((e, i) => {
    return { name: String(i), value: String(i) };
  });

  ngOnInit(): void {
    console.log(this.mm);
  }
}
