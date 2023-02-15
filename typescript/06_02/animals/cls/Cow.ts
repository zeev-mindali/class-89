class Cow {
  private name: string;
  private age: number;
  private color: string;
  private isAlive: boolean;
  private hasBall: boolean;

  constructor(name: string, age: number, color: string, hasBall: boolean) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.isAlive = true;
    this.hasBall = hasBall;
  }

  public die() {
    this.isAlive = false;
  }

  public getAlive() {
    return this.isAlive;
  }
}

export default Cow;
