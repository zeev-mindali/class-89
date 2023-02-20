import "./Main.css";
import StudentData from "./StudentData/StudentData";

function Main(): JSX.Element {
    //const students = ["Matan","Maya B.","Natanel","Ran","Adam","Nadav","Shira","Deborah","Alon","Arik","Maxim","Sagi","Ben","Noam","Hila","Lior","Ilan"]
    const example = [
        {id:1, name: "Matan",city:"Chulon",age:22},
        {id:2, name: "Maya B",city:"Chulon",age:19},
        {id:3, name: "Natanel",city:"Givat Shmuel",age:24},
        {id:4, name: "Ran",city:"Tel Baruch",age:23},
        {id:5,name: "Nadav",city:"TLV",age:30},
        {id:6, name: "Arik",city:"Savyon",age:24},
        {id:7, name: "Adam",city:"Ramat Aviv",age:18},
    ]

    const isFriday = true;
    return (
        <div className="Main">
			<h1>Hello Class 89</h1>
            <h1>
                {example.map(student=>
                    <StudentData key={student.id} name={student.name} city={student.city} age={student.age}/>
                )}    
            </h1>
            {/*<hr/>*/}
            {/*<div className="Box">Today Special : Pasta and MeetBall</div>*/}
            {/*isFriday && <h1>10% discount</h1>*/}
        </div>
    );
}

export default Main;

/*
 <div key={student.id} className="Box">
                    {student.name}<br/>
                    <h2>{student.city}</h2>
                    <h3>{student.age}</h3>
                </div>
*/