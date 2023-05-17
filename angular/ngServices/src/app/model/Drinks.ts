export class Drink {
  public name: string;
  public price: number;
  public alcohol: number;
  public expired: string;

  constructor(name: string, price: number, alcohol: number, expired: string) {
    this.name = name;
    this.price = price;
    this.alcohol = alcohol;
    this.expired = expired;
  }
}
