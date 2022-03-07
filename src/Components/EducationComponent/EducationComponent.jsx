import React, { Component } from "react";
import ReactRough, {  Ellipse } from "react-rough";
import "./EducationComponent.scss";
import cloud from './../../images/cloud2.svg'
import bracket from './../../images/bracketsCurlyone.svg'
import ButtonComponent from './../../common/ButtonComponent';
export class EducationComponent extends Component {
  componentDidMount(){
    console.log(window.innerWidth, window.innerHeight)
  }
  render() {
    return (
      <div className="educationContainer">
        
        <div className="academics">
          {allEducation()}
        </div>
        <div className="certifications">
              <h1>Certifications</h1>
              <img src={bracket} alt="bracket"/>
              <div className="details">
                <div className="single">
                  <p className="main">Digital Comunication Design</p>
                  <p className="points">Adobe photoshop, Illustrator, XD, animate CC</p>
                </div>
                <div className="single">
                  <p className="main">HTML, CSS, Javasrcipt</p>
                </div>
                <div className="single">
                  <p className="main">MongoDB</p>
                </div>
                <div className="single">
                  <p className="main">Embedded and Robotics</p>
                  <p className="points">8051/8052 microcontroller, <br/>PCB design, C Programming </p>
                </div>
                <div className="single">
                  <p className="main">Solidworks</p>
                </div>
                <div className="single">
                  <p className="main">Creo element / Pro 5.0 PTC</p>
                </div>
              </div>
        </div>
        <div className="buttonResume">
          <p>no pressure BUT</p>
          <ButtonComponent label="Here you can get my resume" width={250} size="1.5rem"/>
        </div>
      </div>
    );
  }
}

export default EducationComponent;


function allEducation(){
  return <React.Fragment>
    <div className="postGrad">
            <div className="details">
              <h1>Post graduation diploma</h1>
              <p className="date">2014-2015 </p>
              <p className="place">Mumbai, India</p>
              <p className="deep">Piping Design Engineering</p>
              <p className="deep">SP3D piping, autocad, Caesar II</p>
            </div>

            <ReactRough renderer="svg" width={380} height={200}>
              <Ellipse
                height={170}
                width={305}
                x={170}
                y={100}
                stroke="#1d1d1d"
                strokeWidth={3}
                bowing={3}
                roughness={2}
              />
            </ReactRough>
          </div>
          <div className="Grad">
          <div className="details">
              <h1>Bachelor's of Technology</h1>
              <p className="date">2010-2014</p>
              <p className="place">Udaipur, India</p>
              <p className="deep">
                Mechanical Engineering<br/>Autocad, Creo pro-e, Matlab, C++
              </p>
              
            </div>
            <img src={cloud} alt="" />
          </div>
          <div className="school">
            <div className="details">
              <h1>High School</h1>
              <p className="date">2010</p>
              <p className="place">Udaipur, India</p>
              <p className="deep">
                Physics, Chemistry, Mathematics,<br/>Computer Science(C++)
              </p>
            </div>

            <ReactRough renderer="svg" width={360} height={210}>
              <Ellipse
                height={175}
                width={275}
                x={170}
                y={100}
                stroke="#1d1d1d"
                strokeWidth={3}
                bowing={3}
                roughness={2}
              />
            </ReactRough>
          </div>
  </React.Fragment>
}