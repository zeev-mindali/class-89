class MySingleTone {
  private myInstance: MySingleTone;

  //constructor is private , we can not do a new command
  private constructor() {
    console.log('in constructor');
    this.myInstance = new MySingleTone();
  }

  public getInstance() {
    //check if myInstance is null
    if (this.myInstance === null) {
      //if it's null create a new instance
      this.myInstance = new MySingleTone();
    }
    //return the instance
    return this.myInstance;
  }
}
