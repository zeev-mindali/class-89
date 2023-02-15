abstract class Person{
    protected firstName:string="";
    protected lastName:string="";
    
    constructor(firstName:string, lastName:string){
        this.setFirstName(firstName);
        this.setLastName(lastName);
    }

    public setFirstName(firstName:string){
        this.firstName = firstName;
    }

    public setLastName(lastName:string){
        this.lastName = lastName;
    }

    public getFirstName():string{
        return this.firstName;
    }

    public getLastName():string{
        return this.lastName;
    }

    public print():string{
        return `person: ${this.firstName} ${this.lastName} `;
    }

    //abstract method, need to be implemented in derived classes
    //public abstract getDrink():string;
}

export default Person;