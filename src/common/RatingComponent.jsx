import React  from "react";
import ReactRough, {Ellipse } from "react-rough";
export default function RatingComponent(props) {
  return <div style={{display:"grid", gridAutoFlow:"column", gap:"26px", position:"relative", top:"-5px"}}>
{
    props.rate.map(function (i, index)
    {return <div key={index}>

    <ReactRough renderer="svg" width={30} height={30}>
    <Ellipse
      height={15}
      width={20}
      x={15}
      y={15}
      stroke="#1d1d1d"
      strokeWidth={3}
      bowing={1}
      roughness={1}
      fill="#0677ea"
      fillWeight={i}
      fillStyle ="zigzag"
      hachureGap= {6}
    />
  </ReactRough>
    </div>}
    )
  }
  </div> 
  
}
