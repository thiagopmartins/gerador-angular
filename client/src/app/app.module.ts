import { CoreModule } from './core/core.module';
import { DialogService } from './dialog.service';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './dashboard/empresa/empresa.component';
import { EmpresaService } from './dashboard/empresa/empresa.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpresaComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DialogService, EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
