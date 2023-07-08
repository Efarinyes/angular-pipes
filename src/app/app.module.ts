
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// configuració paràmetre 'locale' del pipe date ( i d'altres )
import localeCat from '@angular/common/locales/ca'
import localeFrCa from '@angular/common/locales/fr-CA'

import {registerLocaleData } from '@angular/common'

registerLocaleData(localeCat);
registerLocaleData(localeFrCa)


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'ca'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
