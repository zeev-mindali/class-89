class Car {
  private carNum: string;
  private carOwner: string;
  private ownerPhone: string;
  private ownerFlat: number;
  private ownerCars: number;
  private ownerBuilding: number;
  private parkingNumber: number;

  constructor(
    carNum: string,
    carOwner: string,
    ownerPhone: string,
    ownerFlat: number,
    ownerCars: number,
    ownerBuilding: number,
    parkingNumber: number
  ) {
    this.carNum = carNum;
    this.carOwner = carOwner;
    this.ownerPhone = ownerPhone;
    this.ownerFlat = ownerFlat;
    this.ownerCars = ownerCars;
    this.ownerBuilding = ownerBuilding;
    this.parkingNumber = parkingNumber;
  }

  public getCarNum() {
    return this.carNum;
  }

  public getCarOwner() {
    return this.carOwner;
  }

  public getOwnerPhone() {
    return this.ownerPhone;
  }

  public getOwnerFlat() {
    return this.ownerFlat;
  }

  public getOwnerCars() {
    return this.ownerCars;
  }

  public getOwnerBuilding() {
    return this.ownerBuilding;
  }

  public getParkingNumber() {
    return this.parkingNumber;
  }

  public getObject() {
    return this;
  }
}

export default Car;
