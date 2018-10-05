import { TEFComponent } from './dashboard/integrador/TEF/tef.component';
import { POSComponent } from './dashboard/integrador/POS/pos.component';
import { IntegradorService } from './dashboard/integrador/integrador.service';
import { CoreModule } from './core/core.module';
import { DialogService } from './dialog.service';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './dashboard/empresa/empresa.component';
import { EmpresaService } from './dashboard/empresa/empresa.service';
import { IntegradorComponent } from './dashboard/integrador/integrador.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpresaComponent,
    IntegradorComponent,
    POSComponent,
    TEFComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DialogService, EmpresaService, IntegradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
