import React, { Component } from 'react'
import './StickerGeneralComponent.scss'
export default class StickerGeneralComponent extends Component {
  componentDidMount(){
    console.log(this.props)
  }
    render() {
        return (
<div className={`container item${this.props.number}`}>
  <div className="container-inner">
    <div className="sticky-container">
      <div className="sticky-outer">
        <div className="position">
          {this.props.position} 
        </div>
        <div className="sticky">
          <svg width="0" height="0">
            <defs>
              <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                <path
                      d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                      strokeLinejoin="round"
                      strokeLinecap="square"
                      />  
              </clipPath>
            </defs>
          </svg>
          <div className="sticky-content" style={{background:this.props.bColor}}>
          <div className="details">
            <p className="company">{this.props.company}</p>
            <p className="date">{this.props.date}</p>
            <div className="discription">
              {this.props.children}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            
        )
    }
}
