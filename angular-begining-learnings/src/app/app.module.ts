import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { USDtoINRPipe } from './pipt/usdto-inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    USDtoINRPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
