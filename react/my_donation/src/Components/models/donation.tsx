class Donation{
    public timeStamp:number;
    public donarName:string;
    public donarSum:number;
    public donarMemo:string;

    constructor(timeStamp:number, donarName:string, donarSum:number, donarMemo:string){
        this.timeStamp = timeStamp;
        this.donarName = donarName;
        this.donarSum = donarSum;
        this.donarMemo = donarMemo;
    }
}

export default Donation;