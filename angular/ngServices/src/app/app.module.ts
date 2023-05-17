//libraries
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//components (directives)
import { AppComponent } from './app.component';
import { InputUserComponent } from './comps/input-user/input-user.component';
import { ItemsListComponent } from './comps/items-list/items-list.component';
import { CryptoListComponent } from './comps/crypto-list/crypto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserComponent,
    ItemsListComponent,
    CryptoListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
