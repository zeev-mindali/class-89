import Staff from "./Staff";

class Pilot extends Staff{
    private licenseNumber:string="";

    constructor(firstName:string, lastName:string,seniorty:number,licenseNumber:string)
    {
        super(firstName, lastName,seniorty);
        this.setLicenseNumber(licenseNumber);
    }

    public getLicenseNumber():string{
        return this.licenseNumber;
    }

    public setLicenseNumber(value:string){
        this.licenseNumber = value;
    }

    public print(): string {
        return `staff: ${super.print()} pilot:${this.licenseNumber}`;
    }
}

export default Pilot;