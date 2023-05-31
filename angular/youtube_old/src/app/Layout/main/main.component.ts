import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  myType = 'text';
  myPlaceHolder = 'enter your user name';
  myPass = '';
  myAge = 0;

  onPassUpdate(event: any) {
    this.myPass = event.target.value;
    console.log(this.myPass);
  }
}
