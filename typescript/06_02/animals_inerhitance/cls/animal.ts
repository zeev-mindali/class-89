import Cat from "./Cat";
import Cow from "./Cow";
import Lion from "./Lion";
import Mouse from "./Mouse";

class Animal {
  protected name: string;
  protected age: number;
  protected color: string;
  protected isAlive: boolean;
  protected sound: string;

  constructor(name: string, age: number, color: string, sound: string) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.isAlive = true;
    this.sound = sound;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public eatCow(animal: Cow) {
    animal.isAlive = false;
  }

  public eatMouse(animal: Mouse) {
    animal.isAlive = false;
  }

  public drinkMilk(cow: Cow) {
    // if (this instanceof Cat) {
    //   if (cow.isAlive) {
    //     console.log("Yammi, milk");
    //   } else {
    //     console.log("Ichas , blood");
    //   }
    // } else {
    //   console.log("You are not a cat");
    // }

    if (cow.isAlive) {
      console.log("Yammi, milk");
    } else {
      console.log("Ichas , blood");
    }
  }

  public makeSound() {
    console.log(this.sound);
  }
}

export default Animal;
