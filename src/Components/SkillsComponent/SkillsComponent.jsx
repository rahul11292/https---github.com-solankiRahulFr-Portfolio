import React, { Component } from "react";
import ReactRough, { Rectangle, Ellipse } from "react-rough";
import "./SkillsComponent.scss";
import RatingComponent from "./../../common/RatingComponent";
import bracketsone from "./../../images/bracketsCurlyone.svg";
import bracketsone2 from "./../../images/bracketsCurlyone2.svg";
import arrow from "./../../images/arrowLang.svg";
import ButtonComponent from './../../common/ButtonComponent';
export default class SkillsComponent extends Component {
  render() {
    return (
      <div className="skillComponentMain">
        <div className="Competence">
          <div className="extraInfoSkills1">
            <p>
              professionaly <br />
              worked on
            </p>
            <img src={bracketsone} alt="" />
          </div>
          <div className="extraInfoSkills2">
            <p>
              personally <br />
              worked on
            </p>
            <img src={bracketsone2} alt="" />
          </div>
          <h1>Tech</h1>
          {skillsUIBlock()}
        </div>
        <div className="lang">
          <div>
            <div className="extraInfoSkills">
              <p>
              currently
                <br />
                learning
                <br />
                please wait
              </p>
              <img src={arrow} alt="" />
            </div>
            <h1 style={{ marginBottom: "1.2em" }}>Languages</h1>
            {languagesUI()}
          </div>
          <div>
          <h1>Learning...</h1>
              {learning()}</div>
        </div>
        <div className="resume">
        <ButtonComponent label="I think you want my resume ?" width={250} size="1.4rem"/>
        </div>
      </div>
    );
  }
}

function skillsUIBlock() {
  return (
    <div className="Skills">
      <ReactRough renderer="svg" width={260} height={390}>
        <Rectangle
          height={380}
          width={250}
          x={3}
          y={3}
          stroke="#f02324"
          strokeWidth={3}
          bowing={2.5}
        />
      </ReactRough>

      <ul>
        <li className="highlighSkills">HTML, CSS, SCSS</li>
        <li className="highlighSkills">Javascript</li>
        <li className="highlighSkills">React, Angular, Vue</li>
        <li className="highlighSkills">Python</li>
        <li className="highlighSkills">PYQT5</li>
        <li className="highlighSkills">Photoshop, Illustrator </li>
        <li className="highlighSkills">Adobe XD, Figma</li>
        <li>Nodejs</li>
        <li>MongoDB</li>
        <li>React Native</li>
      </ul>
    </div>
  );
}

function languagesUI() {
  return (
    <div className="languages">
      <ReactRough renderer="svg" width={360} height={210}>
        <Ellipse
          height={175}
          width={275}
          x={170}
          y={100}
          stroke="#f02324"
          strokeWidth={3}
          bowing={3}
          roughness={2}
        />
      </ReactRough>
      <ul>
        <li>
          English <RatingComponent rate={[2, 2, 2, 2, 2]} />
        </li>
        <li>
          French <RatingComponent rate={[2, 2, 0, 0, 0]} />
        </li>
        <li>
          Hindi <RatingComponent rate={[2, 2, 2, 2, 2]} />
        </li>
      </ul>
    </div>
  );
}

function learning() {
  return (
    <div className="Skills">
      <ReactRough renderer="svg" width={260} height={130}>
        <Rectangle
          height={120}
          width={250}
          x={3}
          y={3}
          stroke="#f02324"
          strokeWidth={3}
          bowing={2.5}
        />
      </ReactRough>

      <ul>
        <li>React Native Animation</li>
        <li>Docker</li>
        <li>MySQL</li>
      </ul>
    </div>
  );
}
