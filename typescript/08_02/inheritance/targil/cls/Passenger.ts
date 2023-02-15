import Person from "./Person";

class Passenger extends Person{
    private id:string="";
    constructor(firstName:string,lastName:string,id:string){
        super(firstName,lastName);
        this.id = id;
    }

    public getId():string{
        return this.id;
    }

    public setId(id:string){
        this.id=id;
    }

    //override super print
    public print(): string {
        return `${super.print()} ${this.getId()}`;
    }
}

export default Passenger;