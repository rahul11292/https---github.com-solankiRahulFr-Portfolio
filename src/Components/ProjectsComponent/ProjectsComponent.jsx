import React, { Component } from "react";
import ReactRough, { Ellipse, Rectangle } from "react-rough";
import './ProjectsComponent.scss'
import ButtonComponent from './../../common/ButtonComponent';
import IdemWeb from './../../images/ImageStackWeb.png';
import idemMobile from './../../images/idemMobile.png';
import ImageCarousalComponent from './../../common/ImageCarousalComponent/ImageCarousalComponent';


export default class ProjectsComponent extends Component {
    constructor(props){
        super(props);
        this.child = React.createRef();
        this.state={
            web : true
        }
    }

    openModal = (val) => {
        if(val){
                this.setState({
                    web:true
                })
        }
        else{
            this.setState({
                web:false
            })
        }
        this.child.current.handleOpenModal();
      };
   
  render() {
    return (
      <div className="projects">
        <div className="points">
          <div className="pointAndLine">

          <ReactRough renderer="svg" width={30} height={30}>
            <Ellipse
              height={10}
              width={10}
              x={15}
              y={15}
              stroke="#f02324"
              strokeWidth={5}
              bowing={1}
              roughness={1}
            />
          </ReactRough>
          <div className="content">
            <p>Working on an application from UI to front end and back end</p>
            <p className="project">IDEM a buisness and individual identity</p>
            <p className="techStack">Tech. stack - HTML, SCSS, React, Nodejs, MongoDB, React Native</p>
          </div>
          </div>
          <div className="imagesBox">
          <ReactRough renderer="svg" width={200} height={200}>
        <Rectangle
          height={190}
          width={190}
          x={3}
          y={3}
          stroke="#f02324"
          strokeWidth={3}
          bowing={2.5}
        />
      </ReactRough>
      <button className="imageWeb" onClick={()=>this.openModal(true)}>
         <img src={IdemWeb} alt="web imsges" /> web
      </button>
      <button className="imageMobile" onClick={()=>this.openModal(false)}>
         mobile <img src={idemMobile} alt="web imsges" /> 
      </button>
          </div>
          
        </div>
        <div className="points">
        <div className="pointAndLine">

          <ReactRough renderer="svg" width={30} height={30}>
            <Ellipse
              height={10}
              width={10}
              x={15}
              y={15}
              stroke="#f02324"
              strokeWidth={5}
              bowing={1}
              roughness={1}
            />
          </ReactRough>
         // <div className="content">
          //  <p>Two more ideas on the way</p>
         // </div>
        </div>
        </div>
        <div>
        <ButtonComponent label="SO.. resume ?" width={180} size="1.9rem"/>
        </div>
            <ImageCarousalComponent ref={this.child} web={this.state.web}/>
        <div className="note">
            Sorry I can't share the previous companies projects, I will make up to it with my personal ones
        </div>
      </div>
    );
  }
}
