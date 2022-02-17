import React, { Component } from "react";
import "./ExperienceComponent.scss";
import ReactRough, { Line  } from "react-rough";
import StickerGeneralComponent from './../../StickerComponent/GeneralSticker/StickerGeneralComponent';
export default class ExperienceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceContent: [
        {
          number: 1,
          position: "Associate developer UI/UX",
          company: "SISA information security, Bangalore",
          date: "Sep 2020 - July 2021",
          heightBox: 180,
          description: "Web and desktop for employee tracking application. Tech. used HTML, CSS, Javascript, Jquery, React, Python, PYQT5, Figma",
          bColor : "linear-gradient(180deg, #bbebff 0%, #bbebff 12%, #aadcf1 75%, #c3e5f4 100%)"
        },
        {
          number: 2,
          position: "UI/UX Developer",
          company: "VlinkD Technologies, Bangalore",
          date: "Oct 2019 - Sep 2020",
          heightBox: 180,
          description: "Car service application. Tech. used HTML, SASS, Typescript, Angular2+, Photoshop, Adobe XD. UI design for mobile appliations",
          bColor : "linear-gradient(180deg, #fffbbb 0%, #fff8bb 12%, #f1e6aa 75%, #f4efc3 100%)"
        },
        {
          number: 3,
          position: "UI/UX Developer",
          company: "Auxesis Infotech, Delhi",
          date: "April 2019 - July 2019",
          heightBox: 180,
          description: "Real estate application. Tech. used HTML, CSS, Javascript, Vuejs, jquery, Photoshop, illustrator, XD. Web animation",
          bColor : "linear-gradient(180deg, #fbb 0%, #fbb 12%, #f1aaaa 75%, #f4c3c3 100%)"

        },
        
        {
          number: 4,
          position: "UI/UX Designer",
          company: "UpNexTech, Udaipur",
          date: "feb 2018 - feb 2019",
          heightBox: 180,
          description: "UI - web and mobile. Tech. used Photoshop, Illustrator, XD, HTML, CSS, Javascript. Logo, collateral design",
          bColor : "linear-gradient(180deg, #ffcebb 0%, #ffd1bb 12%, #f1bbaa 75%, #f4d1c3 100%)"
        },
        {
            number: 5,
            position: "Senior Associate",
            company: "Virtual Binz, Udaipur",
            date: "Jan 2017 - feb 2018",
            heightBox: 180,
            description: "Graphic design and content marketing. Tech. used Photoshop, Illustrator, Mailchimp, Wordpress, XD, HTML, CSS, Javascript",
            bColor : "linear-gradient(180deg, #caffbb 0%, #d0ffbb 12%, #bdf1aa 75%, #cef4c3 100%)"
          },
        {
            number: 6,
            position: "Mechanical Design Engineer",
            company: "Pyrotech Electronics, Udaipur",
            date: "Jan 2016 - Nov 2016",
            heightBox: 130,
            description: "2D, 3D Design of Mechanical Equipments. Tech. used Autocad, solidWorks, Creo Pro-e",
            bColor : "linear-gradient(180deg, #bbebff 0%, #bbebff 12%, #aadcf1 75%, #c3e5f4 100%)"
          },
      ],
      height: window.innerHeight, 
      width: window.innerWidth
    };

    this.updateDimension = this.updateDimension.bind(this);
  }

  updateDimension(){
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.updateDimension);
  }
  
  render() {
    return (
      <div className="experienceContainer">
        <div className="UpRight">
        <StickerGeneralComponent {...this.state.experienceContent[4]} >
                      <p>{this.state.experienceContent[4].description}</p>
                  </StickerGeneralComponent>
                  <StickerGeneralComponent {...this.state.experienceContent[2]} >
                      <p>{this.state.experienceContent[2].description}</p>
                  </StickerGeneralComponent>
                  <StickerGeneralComponent {...this.state.experienceContent[0]} >
                      <p>{this.state.experienceContent[0].description}</p>
                  </StickerGeneralComponent>
                  
        </div>
        <div className="timeline">
          <p className="year2016">2016</p>
        <ReactRough className="horizontal" renderer="svg" width={this.state.width-150} height={30}>
            <Line
              x1={30}
              x2={this.state.width-150}
              y1={5}
              y2={25}
              stroke="#1d1d1d"
              strokeWidth={3}
              bowing={2}
             
            />
            
          </ReactRough>
          <ReactRough renderer="svg" className="vartical" height={this.state.height-200} width={30}>
            <Line
              x1={5}
              x2={25}
              y1={30}
              y2={this.state.height-200}
              stroke="#1d1d1d"
              strokeWidth={3}
              bowing={2}
             
            />
            
          </ReactRough>
          <p className="year2022">2022</p>
        </div>
        
        <div className="downLeft">
        <StickerGeneralComponent {...this.state.experienceContent[5]} >
                      <p>{this.state.experienceContent[5].description}</p>
                  </StickerGeneralComponent>
                  <StickerGeneralComponent {...this.state.experienceContent[3]} >
                      <p>{this.state.experienceContent[3].description}</p>
                  </StickerGeneralComponent>
                  <StickerGeneralComponent {...this.state.experienceContent[1]} >
                      <p>{this.state.experienceContent[1].description}</p>
                  </StickerGeneralComponent>
        </div>
           
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }
}


// render() {
//   return (
//     <div className="experienceContainer">
//       {this.state.experienceContent.map((x) => {
//         return <SingleExperienceComponent key={x.number} {...x}>
//           <ul>
//             {x.description.map((i, index) => {
//               return <li key={index}>{i}</li>;
//             })}
//           </ul>
//         </SingleExperienceComponent>;
//       })}
//     </div>
//   );
// }
// }


// this.state = {
//   experienceContent: [
//     {
//       number: 1,
//       position: "Associate developer UI/UX",
//       company: "SISA information security, Bangalore",
//       date: "Sep 2020 - July 2021",
//       heightBox: 180,
//       description: [
//         "Front end development - web and desktop for employee tracking application",
//         "Tech. used HTML, CSS, Javascript, Jquery, React, Python, PYQT5, Figma"
//       ],
//     },
//     {
//       number: 2,
//       position: "UI/UX Developer",
//       company: "VlinkD Technologies, Bangalore",
//       date: "Oct 2019 - Sep 2020",
//       heightBox: 180,
//       description: [
//         "Front Development - car service application",
//         "Tech. used HTML, SASS, Typescript, Angular2+, Photoshop, Adobe XD",
//         "UI design for mobile appliations"
//       ],
//     },
//     {
//       number: 3,
//       position: "UI/UX Developer",
//       company: "Auxesis Infotech, Delhi",
//       date: "April 2019 - July 2019",
//       heightBox: 180,
//       description: [
//         "Front Development - real estate application",
//         "Tech. used HTML, CSS, Javascript, Vuejs, jquery, Photoshop, illustrator, XD",
//         "Web animation"
//       ],
//     },
    
//     {
//       number: 5,
//       position: "UI/UX Designer",
//       company: "UpNexTech, Udaipur",
//       date: "feb 2018 - feb 2019",
//       heightBox: 180,
//       description: [
//         "UI - web and mobile",
//         "Tech. used Photoshop, Illustrator, XD, HTML, CSS, Javascript",
//         "Logo, collateral design"
//       ],
//     },
//     {
//         number: 5,
//         position: "Senior Associate",
//         company: "Virtual Binz, Udaipur",
//         date: "Jan 2017 - feb 2018",
//         heightBox: 180,
//         description: [
//           "Graphic design and content marketing",
//           "Tech. used Photoshop, Illustrator, Mailchimp, Wordpress, XD, HTML, CSS, Javascript"
//         ],
//       },
//     {
//         number: 6,
//         position: "Mechanical Design Engineer",
//         company: "Pyrotech Electronics, Udaipur",
//         date: "Jan 2016 - Nov 2016",
//         heightBox: 130,
//         description: [
//           "2D, 3D Design of Mechanical Equipments",
//           "Tech. used Autocad, solidWorks, Creo Pro-e"
//         ],
//       },
//   ],
//   height: window.innerHeight, 
//   width: window.innerWidth
// };
