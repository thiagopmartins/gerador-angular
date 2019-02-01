import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApolloConfigModule } from './../apollo-config.module';
import { DataService } from '../providers/data.service';
import { ElectronService } from '../providers/electron.service';
import { DocumentSender } from 'app/providers/document.service';
@NgModule({
  exports: [
    ApolloConfigModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
  ],
  providers: [ElectronService, DataService, DocumentSender]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModel: CoreModule // * APENAS UM MÓDULO (AppModule) PODERÁ IMPORTAR O CoreModule
  ) {
    if (parentModel){
      throw new Error('CoreModule dever ser importado apenas no AppModule.');
    }
  }
}
