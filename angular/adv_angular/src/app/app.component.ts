import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hila number 1 site (the best that user can get)';
  showInfo = false;
  userLogged = true;

  onBtnClick() {
    this.userLogged = !this.userLogged;
  }

  getShowColor() {
    return this.userLogged ? 'red' : 'green';
  }
}
