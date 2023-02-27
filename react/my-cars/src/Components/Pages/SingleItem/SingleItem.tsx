import "./SingleItem.css";

interface CarProps {
  mispar_rechev: number;
  tozeret_nm: string;
  tzeva_rechev: string;
  shnat_yitzur: string;
}

function SingleItem(props: CarProps): JSX.Element {
  return (
    <div className="SingleItem">
      <div className="Box">
        <h1>{props.mispar_rechev}</h1>
        <hr />
        <h2>{props.tozeret_nm}</h2>
        <h3>{props.tzeva_rechev}</h3>
        <h3>{props.shnat_yitzur}</h3>
      </div>
    </div>
  );
}

export default SingleItem;
