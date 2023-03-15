import {Notyf} from "notyf"

class Notify{
    private notification = new Notyf({duration: 4000, position:{x:"left", y:"top"}});

    public success (message:string){
        this.notification.success(message);
    }

    public error(message:string){
        this.notification.error(message);
    }
}

const notify = new Notify();
export default notify;

// let not = new Notyf({duration: 4000, position:{x:"left", y:"top"}});
// not.error("Where The Food?");
