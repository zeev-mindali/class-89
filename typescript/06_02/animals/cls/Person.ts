//encapsulation
//public (default),private, protected

class Person {
  private name: string;
  private age: number;
  private isMarried: boolean;
  private city: string;
  private password: string;

  constructor(
    name: string,
    age: number,
    isMarried: boolean,
    city: string,
    password: string
  ) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.city = city;
    this.password = password;
  }

  public checkPassword(userName: string, userPassword: string) {
    return this.name === userName && this.password === userPassword;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string) {
    this.name = newName;
  }
}

export default Person;
