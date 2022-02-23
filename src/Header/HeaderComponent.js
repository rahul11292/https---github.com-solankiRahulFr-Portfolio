import React, { Component } from "react";
import "./HeaderComponent.scss";
import { NavLink } from "react-router-dom";
export default class HeaderComponent extends Component { 
    componentDidMount(){
        let links = document.querySelectorAll('.c-nav__item a');

        links.forEach(function (link) {
            let linkWidth = parseInt(link.offsetWidth)-3;
            let  svg = createSVG(linkWidth);
            insertAfter(svg, link);
         
        });
      
    }

  render() {
    return (
      <div className="headingMain">
        {/* <div className="logo">
          <div id="HeadingLogo">
            <img src={CurieuLogo}></img>
          </div>
        
        </div> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.52 55.09">
 <path d="M1049.5,535.77s2.42-12.62-62.23-11c-71,1.72-42.69,38.5-42.69,38.5s7.1,10.75,51,10.75c50,0,50.75-30.67,50.75-30.67a31.09,31.09,0,0,0-10.77-24.42" transform="translate(-939 -518.91)"/>
</svg> */}
        <div className="menu">
        
    <div className="group">
      <svg className="underlineSvg" xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="black" />
        <stop offset="100%" stopColor="black" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="black" />
        <stop offset="100%" stopColor="black" />
      </linearGradient>
    </defs>
</svg>
      
    
        <ul className="c-nav underliner">
            <li className="c-nav__item"><NavLink className={function ({ isActive }) { return isActive? "active": ''} } to="/">About me{circleSvg()}</NavLink ></li>
            <li className="c-nav__item"><NavLink className={function ({ isActive }) { return isActive? "active": ''} } to="skills">Skills{circleSvg()}</NavLink ></li>
            <li className="c-nav__item"><NavLink className={function ({ isActive }) { return isActive? "active": ''} } to="education">Education{circleSvg()}</NavLink ></li>
            <li className="c-nav__item"><NavLink className={function ({ isActive }) { return isActive? "active": ''} } to="experience">Experience{circleSvg()}</NavLink ></li>
            <li className="c-nav__item"><NavLink className={function ({ isActive }) { return isActive? "active": ''} } to="projects">Projects{circleSvg()}</NavLink ></li>
            {/* <li className="c-nav__item"><a href="#">No Bulls*it blogs</a></li> */}
        </ul>
    </div>


            
        </div>
      </div>
    );
  }
}

function circleSvg(){
 return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 57">
 <g>
   <path d="M1025.55,528.28s2.42-12.12-62.23-10.56c-71,1.65-42.69,37-42.69,37s7.1,10.32,51,10.32c50,0,50.75-29.44,50.75-29.44a29.31,29.31,0,0,0-10.77-23.45" transform="translate(-913 -511)"/>
   <rect width="115" height="57" style={{fill: "none", strokeWidth:"0px"}}/>
 </g>
</svg>


}
function createSVG(linkWidth) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", linkWidth);
    svg.setAttribute("height", "20");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var pathD = randomizePath(linkWidth);

    path.setAttribute("d", pathD);
    path.setAttribute("fill", "transparent");
    path.setAttribute("stroke", "lightgrey");
    path.setAttribute("stroke-width", "7");
    path.setAttribute("stroke-linecap", "round");

    svg.appendChild(path);

    return svg;
}

function randomizePath(linkWidth) {
    var moveYMin = 5;
    var moveYMax = 12;
    var curveXMin = 10;
    var curveXMax = linkWidth-5; /* Width of the link */
    var curveYMin = 5;
    var curveYMax = 10;
    var endYMin = 5;
    var endYMax = 10;
    var moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
    var curveX = Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
    var curveY = Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
    var endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

    var newPath = `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth - 7} ${endY}`;

    return newPath;
}




function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

