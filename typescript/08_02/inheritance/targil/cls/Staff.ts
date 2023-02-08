import Person from "./Person";

abstract class Staff extends Person{
    protected seniority:number=0;

    constructor(firstName:string, lastName:string,seniority:number){
        super(firstName,lastName);
        this.setSeniority(seniority);
    }

    public setSeniority(seniority:number){
        this.seniority = seniority;
    }

    public getSeniority():number{
        return this.seniority;
    }

    public print(): string {
        return `person: ${super.print()} staff:${this.getSeniority()}`;
    }
}

export default Staff;