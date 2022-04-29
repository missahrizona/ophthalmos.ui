import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'her-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  menuItems: MenuItem[];
  activeTabIndex: number;
  indexToPath: string[];
  pathToIndex: any;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'New Patient',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Find Patient',
        icon: 'pi pi-fw pi-search',
        badge: '3',
      },
    ];

    this.indexToPath = [
      '/home/demographics',
      '/home/hx',
      '/home/ped',
      '/home/vitals',
      '/home/op',
      '/home/docs',
    ];

    this.pathToIndex = {
      '/home/demographics': 0,
      '/home/hx': 1,
      '/home/ped': 2,
      '/home/vitals': 3,
      '/home/op': 4,
      '/home/docs': 5,
    };

    this.activeTabIndex = this.pathToIndex[this.router.url];
  }

  onTabviewChange(event: any) {
    this.activeTabIndex = event.index;
    let route = this.indexToPath[this.activeTabIndex];
    this.router.navigate([route]);
  }
}
