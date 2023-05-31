import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan = 'Hello Class 89 - the best the lecturer can get';
  boys = 'Sagi,Ilan, Nadav, Matan (the king), Ido, Alon, Adam (and eve) ,Anton';
  girls = 'Liiiiii or, Noam, Hila, Shira, Deborah, Maya (the queen)';

  test = '<u> names: </u> zeev etc......';

  showBoys() {
    return `boys: ${this.boys}`;
  }

  showGirls() {
    return `girls: ${this.girls}`;
  }
}
