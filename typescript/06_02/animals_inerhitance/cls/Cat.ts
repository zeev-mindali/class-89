import Animal from "./animal";

class Cat extends Animal {
  private mustageLength: number;

  constructor(
    name: string,
    age: number,
    color: string,
    sound: string,
    mustageLength: number
  ) {
    super(name, age, color, sound);
    this.mustageLength = mustageLength;
  }

  public getLength() {
    return this.mustageLength;
  }
}

export default Cat;
