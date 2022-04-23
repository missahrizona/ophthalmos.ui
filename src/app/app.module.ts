import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { TabMenuModule } from 'primeng/tabmenu';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DemographicsComponent } from './components/demographics/demographics.component';
import { HeathHistoryComponent } from './components/heath-history/heath-history.component';
import { PhysicalExamDetailComponent } from './components/physical-exam-detail/physical-exam-detail.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { SurgicalProceduresComponent } from './components/surgical-procedures/surgical-procedures.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemographicsComponent,
    HeathHistoryComponent,
    PhysicalExamDetailComponent,
    VitalsComponent,
    SurgicalProceduresComponent,
    DocumentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelModule,
    PasswordModule,
    InputTextModule,
    MenubarModule,
    BadgeModule,
    TabMenuModule,
    SkeletonModule,
    TableModule,
    TabViewModule,
    CardModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
