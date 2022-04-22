import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'her-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[];
  tabItems: MenuItem[];
  activeTab: MenuItem;
  products: any[];

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

    this.tabItems = [
      { label: 'Demographics', icon: 'pi pi-fw pi-id-card' },
      { label: 'Health History', icon: 'pi pi-fw pi-calendar' },
      { label: 'Physical Exam Detail', icon: 'pi pi-fw pi-eye' },
      { label: 'Vitals', icon: 'pi pi-fw pi-heart' },
      { label: 'Surgical Procedures', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documents', icon: 'pi pi-fw pi-file-o' },
    ];
    this.activeTab = this.tabItems[0];

    this.products = [1, 2, 3, 4, 5];
  }
}
