class Student {
  //fields - תכונות
  private name: string = "";
  private avgGrade: number = 0;
  private email: string = "";
  private age: number = 0;

  //Constructor - בנאי
  constructor(name: string, avgGrade: number, email: string, age: number) {
    this.setName(name);
    this.setAvgGrade(avgGrade);
    this.setEmail(email);
    this.setAge(age);
  }

  //Getters and Setters
  //SETTERS - לעדכן נתונים
  public setName(name: string) {
    this.name = name;
  }

  public setAvgGrade(avgGrade: number) {
    //validation of data...
    if (avgGrade < 0 || avgGrade > 100) {
      console.log("average grade must be between 0 and 100, grade set to 0");
      this.avgGrade = 0;
      return;
    }
    this.avgGrade = avgGrade;
  }

  public setEmail(email: string) {
    if (email.length <= 7) {
      console.log("Email must be at least 7 characters");
      this.email = "";
      return;
    }
    this.email = email;
  }

  public setAge(age: number) {
    if (age < 18 || age > 80) {
      console.log("age must be between 18 and 80, age setted to 0");
      this.age = 0;
      return;
    }
    this.age = age;
  }

  //GETTERS - קבלת מידע
  public getName(): string {
    if (this.avgGrade>90){
        return ` TALENT !!!! ${this.name} !!!! TALENT`;    
    }
    return this.name;
  }

  public getAvgGrade(): number {
    return this.avgGrade;
  }

  public getEmail(): string {
    return this.email;
  }

  public getAge(): number {
    return this.age;
  }

  //Methods - פעולות
  public print(): string {
    return `name:${this.getName()} age:${this.getAge()} avg:${this.getAvgGrade()} email:${this.getEmail()}`;
  }
}

export default Student;


/*
    private fields
    ---------
    c'tor
    -----
    getters and setters
    ------
    methods
    ------
    overrides

*/