import { DialogService } from './dialog.service';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "@clr/angular";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './dashboard/empresa/empresa.component';
import { EmpresaService } from './dashboard/empresa/empresa.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpresaComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [DialogService, EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
