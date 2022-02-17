import React, { Component } from "react";
import ReactRough, { Rectangle, Circle } from "react-rough";
import "./SingleExperienceComponent.scss";
class SingleExperienceComponent extends Component {
    
  render() {
    return (
      <div className="experienceMain">
        <div className="circle">
          <h1>{this.props.number}</h1>
          <ReactRough renderer="svg" width={50} height={50}>
            <Circle
              diameter={30}
              x={25}
              y={25}
              stroke="#1d1d1d"
              strokeWidth={3}
              bowing={2.5}
            />
          </ReactRough>
        </div>
        <div className="box">
          <div className="position">
            <p>{this.props.position}</p>
          </div>
          <div className="details">
            <p className="company">{this.props.company}</p>
            <p className="date">{this.props.date}</p>
            <div className="discription">
              {this.props.children}
            </div>
          </div>
          <ReactRough renderer="svg" width={350} height={this.props.heightBox+10}>
            <Rectangle
              height={this.props.heightBox}
              width={340}
              x={3}
              y={3}
              stroke="#1d1d1d"
              strokeWidth={3}
              bowing={2.5}
            />
          </ReactRough>
        </div>
      </div>
    );
  }
}

export default SingleExperienceComponent;
