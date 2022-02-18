import React, { Component } from "react";
import ReactRough, { Line } from "react-rough";
import arrowLine from "./../../images/arrowTimeline.svg";
import "./TimelineComponent.scss";
class TimelineComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      dash: [1, 2, 3, 4, 5, 6],
    };

    this.updateDimension = this.updateDimension.bind(this);
  }

  updateDimension() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimension);
  }
  render() {
    if (this.props.alignment === "horizontal") {
      return (
        <div className="horizontal">
          <ReactRough renderer="svg" width={this.state.width - 150} height={30}>
            <Line
              x1={0}
              x2={this.state.width - 150}
              y1={5}
              y2={25}
              stroke="#1d1d1d"
              strokeWidth={3}
              bowing={2}
            />
          </ReactRough>
          <div className="dashes">
            {this.state.dash.map((x) => {
              return (
                <ReactRough renderer="svg" width={5} height={25} key={x}>
                  <Line
                    x1={2}
                    x2={5}
                    y1={0}
                    y2={25}
                    stroke="#1d1d1d"
                    strokeWidth={3}
                    bowing={2}
                  />
                </ReactRough>
              );
            })}
          </div>

          <img src={arrowLine} alt="" />
        </div>
      );
    } else {
      return (
        <div className="vertical">
          <ReactRough
            renderer="svg"
            height={this.state.height - 200}
            width={30}
          >
            <Line
              x1={5}
              x2={25}
              y1={0}
              y2={this.state.height - 200}
              stroke="#1d1d1d"
              strokeWidth={3}
              bowing={2}
            />
          </ReactRough>
          <div className="dashes">
            {this.state.dash.map((x) => {
              return (
                <ReactRough renderer="svg" width={20} height={5} key={x}>
                  <Line
                    x1={0}
                    x2={20}
                    y1={2}
                    y2={5}
                    stroke="#1d1d1d"
                    strokeWidth={3}
                    bowing={2}
                  />
                </ReactRough>
              );
            })}
          </div>
          <img src={arrowLine} alt="" />
        </div>
      );
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }
}

export default TimelineComponent;
