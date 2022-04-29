import { DocumentsComponent } from './components/documents/documents.component';
import { SurgicalProceduresComponent } from './components/surgical-procedures/surgical-procedures.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { PhysicalExamDetailComponent } from './components/physical-exam-detail/physical-exam-detail.component';
import { DemographicsComponent } from './components/demographics/demographics.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeathHistoryComponent } from './components/heath-history/heath-history.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'demographics',
        component: DemographicsComponent,
      },
      {
        path: 'hx',
        component: HeathHistoryComponent,
      },
      {
        path: 'ped',
        component: PhysicalExamDetailComponent,
      },
      {
        path: 'vitals',
        component: VitalsComponent,
      },
      {
        path: 'op',
        component: SurgicalProceduresComponent,
      },
      {
        path: 'docs',
        component: DocumentsComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
