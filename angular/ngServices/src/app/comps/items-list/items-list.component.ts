import { Component, OnInit } from '@angular/core';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  listFruits_ar = ['apple', 'kiwi'];

  constructor(private fruitService: FruitService) {
    this.listFruits_ar = this.fruitService.getFruits();
  }

  ngOnInit(): void {}
}
