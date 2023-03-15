import Car from "../Modal/Car";

//phase I
//create the data that should be exposed to the application
//מה יוחצן לאפליקציה
export class CarState{
    public cars:Car[] = JSON.parse(localStorage.getItem("parking")); //איתחול מערך
}

//phase II
//which actions we want to expose
//איזה פעולות אנחנו רוצים להחצין
export enum CarActionType{
    carAdded = "CarAdd", //הוספת רכב
    carDeleted = "CarDeleted", //מחיקת רכב
    carUpdated = "CarUpdated", //עידכון רכב
    carDownloaded = "CarDownloaded" //עידכון מצבת רכבים, מתבצע פעם אחת
}

//phase III
//how the data structure will be
//action,payload
export interface CarAction{
    type:CarActionType,
    payload?:any;
}

//phase IV
//the function the needs to be run according to action
export function CarAddedAction(car:Car):CarAction{
    return {type: CarActionType.carAdded, payload:car}
}

export function CarDeletedAction(parkingNumber:number):CarAction{
    return {type: CarActionType.carDeleted, payload:parkingNumber}
}

export function CarUpdatedAction(car:Car):CarAction{
    return {type: CarActionType.carDeleted, payload:car}
}

export function CarDownloadedAction(cars:Car[]):CarAction{
    return {type: CarActionType.carDownloaded}
}


//phase V
//building the reducer by it's signature.
//we will not handle or use this function, the redux will handle it for us.
export function carReducer(currentState: CarState = new CarState, action:CarAction):CarState{
    const newState = {...currentState};
    switch(action.type){
        case CarActionType.carAdded:
            newState.cars[action.payload.parkingNumber] = action.payload;
        break;
        case CarActionType.carDeleted:
            newState.cars[action.payload.parkingNumber] = new Car("na","na","na",0,0,0,action.payload.parkingNumber);
        break;
        case CarActionType.carDownloaded:
            // error -> newState.cars = JSON.parse(localStorage.getItem("parking"));
            newState.cars = action.payload;
        break;
        case CarActionType.carUpdated:
            newState.cars[action.payload.parkingNumber] = action.payload; 
        break;
    }
    //localStorage.setItem("parking",JSON.stringify(newState.cars));
    return newState;
}