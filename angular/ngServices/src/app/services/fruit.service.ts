import { Injectable } from '@angular/core';
import { Drink } from '../model/Drinks';
import { sortBy } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  fruits_ar: string[] = [];
  drinks_ar: Drink[] = [];
  constructor() {
    this.fruits_ar = [
      'melon',
      'mango',
      'orange',
      'apple',
      'banana',
      'water malon',
      'kiwi',
    ];
    this.drinks_ar = [
      new Drink('beer', 3, 0.05, '2021-05-10'),
      new Drink('cola', 2.5, 0, new Date().toLocaleDateString()),
    ];
  }

  getFruits() {
    return this.fruits_ar;
  }

  getDrinks() {
    //return this.drinks_ar;
    //        collection to sort   field
    return sortBy(this.drinks_ar, 'price');
  }

  addFruit(value: string) {
    this.fruits_ar.push(value);
  }
}
