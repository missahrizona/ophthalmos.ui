import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'her-surgical-procedures',
  templateUrl: './surgical-procedures.component.html',
  styleUrls: ['./surgical-procedures.component.scss'],
})
export class SurgicalProceduresComponent implements OnInit {
  constructor() {
    this.text = 'Here we go';
  }

  text: string;

  ngOnInit(): void {}
}
