import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'her-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {
    this.username = '';
    this.pw = '';
  }

  username: string;
  pw: string;

  ngOnInit(): void {}
}
