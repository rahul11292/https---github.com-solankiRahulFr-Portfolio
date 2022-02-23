import "./App.scss";
import { ReactComponent as TopCorner } from "./images/cornerTop.svg";
import { ReactComponent as BottomCorner } from "./images/cornerBottom.svg";
import HeaderComponent from "./Header/HeaderComponent";
import { Routes, Route } from "react-router-dom";
import MeComponent from "./Components/MeComponent/MeComponent";
import SkillsComponent from "./Components/SkillsComponent/SkillsComponent";
import ExperienceComponent from "./Components/ExperienceComponent/ExperienceComponent";
import ProjectsComponent from "./Components/ProjectsComponent/ProjectsComponent";
import React, {useEffect} from "react";
import  EducationComponent  from './Components/EducationComponent/EducationComponent';
function App() {
// useEffect(()=>{
//   if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
//     console.log("its Iphone")
//    }
//    else{
//      console.log("not a iphone")
//    }
// },[])

  return (
    <React.Fragment>
      <div className="App">
          <HeaderComponent />
          <Routes>
            <Route index path="/" element={<MeComponent />} />
            <Route path="skills" element={<SkillsComponent />} />
            <Route path="education" element={<EducationComponent />} />
            <Route path="experience" element={<ExperienceComponent />} />
            <Route path="projects" element={<ProjectsComponent />} />
          </Routes>
        
      </div>
      {/* <div>
          <StickerGeneralComponent content="test content"/>
          </div> */}
      {/* //////////////Frame/////////////////////////////// */}
      <div id="mainFrame">
        <div id="borderWhiteBoard"></div>
        <div id="cornerLeftTop">
          <TopCorner />
        </div>
        <div id="cornerRightTop">
          <TopCorner />
        </div>
        <div id="reflectionLine"></div>
        <div id="cornerLeftBottom">
          <BottomCorner />
        </div>
        <div id="cornerRightBottom">
          <BottomCorner />
        </div>
        {/* ////////////////////////////////Frame End////////////////////////// */}
      </div>
    </React.Fragment>
  );
}

export default App;
