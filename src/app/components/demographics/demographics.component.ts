import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'her-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DemographicsComponent implements OnInit {
  constructor() {}

  demoName: string;
  demoBday: any;
  demoGender: string;
  demoRace: string;
  demoContact: any;

  genders: any[] = ['Male', 'Female', 'Non Binary'];
  races: any[] = [
    'Asian',
    'Black / Carribbean / African',
    'White',
    'Mixed / Multiple',
    'Arab',
    'Other',
  ];

  valueIconRight: 'pi-calendar';
  valueIconLeft: 'pi-user';

  ngOnInit(): void {}
}
