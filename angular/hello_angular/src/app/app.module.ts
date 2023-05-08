import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SuccessComponent } from './targil/success/success.component';
import { ErrorComponent } from './targil/error/error.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SuccessComponent, ErrorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
