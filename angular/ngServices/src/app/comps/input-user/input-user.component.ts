import { Component, OnInit } from '@angular/core';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css'],
})
export class InputUserComponent implements OnInit {
  fruit_input = 'Melon';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {}

  addFruit() {
    this.fruitService.addFruit(this.fruit_input);
  }
}
