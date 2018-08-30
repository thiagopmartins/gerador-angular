import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApolloConfigModule } from './../apollo-config.module';

@NgModule({
  exports: [
    ApolloConfigModule,
    ClarityModule,
    BrowserAnimationsModule,
  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModel: CoreModule // * APENAS UM MÓDULO (AppModule) PODERÁ IMPORTAR O CoreModule
  ) {
    if (parentModel)
      throw new Error ('CoreModule dever ser importado apenas no AppModule.');
  }
}
