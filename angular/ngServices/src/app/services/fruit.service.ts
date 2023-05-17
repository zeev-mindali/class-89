import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  fruits_ar: string[] = [];
  constructor() {
    this.fruits_ar = ['melon', 'mango', 'orange'];
  }

  getFruits() {
    return this.fruits_ar;
  }

  addFruit(value: string) {
    this.fruits_ar.push(value);
  }
}
