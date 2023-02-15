import Cow from "./Cow";

class Lion {
  private name: string;
  private age: number;
  private color: string;
  private isAlive: boolean;
  private isCaptive: boolean;

  constructor(name: string, age: number, color: string, isCaptive: boolean) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.isAlive = true;
    this.isCaptive = isCaptive;
  }

  public eatCow(cow: Cow) {
    cow.die();
  }
}

export default Lion;
