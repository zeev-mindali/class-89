class Person{
    name:string;
    age:number;
    city:string|undefined;
    smart:boolean | undefined;
    yearOfBirth:number;

    constructor(name:string,age:number,city?:string,smart?:boolean){
        this.name=name;
        this.age=age;
        this.city=city;
        this.smart=smart;
        this.yearOfBirth=2023-age;
    }
}

export default Person;
