
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "@clr/angular";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LojaComponent } from './dashboard/loja/loja.component';
import { LojaService } from './dashboard/loja/loja.service';
import { IntegradorComponent } from './dashboard/integrador/integrador.component';
import { IntegradorService } from './dashboard/integrador/integrador.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LojaComponent,
    IntegradorComponent,
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
  providers: [LojaService,IntegradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
