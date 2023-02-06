import Animal from "./animal";

class Cow extends Animal {
  private hasBell: boolean;

  public constructor(
    name: string,
    age: number,
    color: string,
    sound: string,
    hasBell: boolean
  ) {
    super(name, age, color, sound);
    this.hasBell = hasBell;
  }

  
}

export default Cow;
