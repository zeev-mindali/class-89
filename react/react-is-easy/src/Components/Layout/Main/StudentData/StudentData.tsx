import "./StudentData.css";

interface StudentProps{
    name:string;
    city:string;
    age:number;
}

function StudentData(props:StudentProps): JSX.Element {
    return (
        <div className="StudentData Box">
			{props.name}<br/>
            <hr/>
            <h3>{props.city}</h3>
            <h2>{props.age}</h2>
        </div>
    );
}

export default StudentData;
