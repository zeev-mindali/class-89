import Student from "./Student";
import Teacher from "./Teacher";

class MyClass{
    private serialNum:number=0;
    private teacher:Teacher;
    private studentArr:Student[] = [];
    private maxStudents:number=0;

    constructor(serialNum:number,teacher:Teacher,studentArr:Student[], maxStudents:number){
        this.setSerialNum(serialNum);
        this.setTeacher(teacher);
        this.setStudentArr(studentArr);
        this.setMaxStudents(maxStudents);
    }

    //setters and getters
    public setSerialNum(serialNum:number){
        if (serialNum<100 || serialNum>400){
            console.log("serial number must be between 100 and 400");
            return;
        }
        this.serialNum = serialNum;
    }
    public setTeacher(teacher:Teacher) {
        this.teacher = teacher;
    }

    public setStudentArr(studentArr:Student[]){
        this.studentArr = studentArr;
    }

    public setMaxStudents(maxStudents:number){
        if (maxStudents<10 || maxStudents>90){
            console.log("maxStudents must be between 10 and 90, set default value to 10");
            this.maxStudents=10;
            return;
        }
        this.maxStudents = maxStudents;
    }

    public getSerialNum():number{
        return this.serialNum;
    }

    public getTeacher():Teacher{
        return this.teacher;
    }

    public getStudentArr():Student[]{
        return this.studentArr;
    }

    public getMaxStudents():number{
        return this.maxStudents;
    }

    public print():string{
        return `
            ${this.serialNum}
            ${this.teacher.print()}
            ${this.maxStudents}
            -------------------
            ${this.studentArr.map(item => item.print())}
        `;
    }

    public addStudent(student:Student){
        if (this.getStudentArr.length<this.maxStudents){
            this.studentArr.push(student);
        } else {
            console.log("no more students!!!");
        }
    }
}

export default MyClass;