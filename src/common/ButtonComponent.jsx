
import ReactRough, { Rectangle } from "react-rough";
import './ButtonComponent.scss';
import { Link } from "react-router-dom";
export default function ButtonComponent(props) {


  return (
    <Link to="./../images/RahuL_Resume_2022_FrontEnd_english.pdf" target="_blank" download>
    <div className="mainButton" style={{position:"relative", cursor:"pointer", width:props.width, height:"50px"}}>
      <h3 style={{fontSize:props.size,position:"absolute", top: "8px",left: "15px",margin: "0px", color:"#1d1d1d"}}>{props.label}</h3>
      <ReactRough
        renderer="svg"
        width= {props.width+10}
        height={60}
      >
        {/* <Rectangle height={80} width={80} x={15} y={15} /> */}
        <Rectangle
    height={50}
    width={props.width}
    x={3}
    y={3}
    stroke="#1d1d1d"
    strokeWidth={3}
    fill="#0677ea"
    fillWeight={0}
    fillStyle ="zigzag"
    hachureGap= {8}
  />
      </ReactRough>
    </div>
    </Link>
  );
}
