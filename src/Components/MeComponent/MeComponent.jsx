import React, { Component } from "react";
import meBackgroundPaper from "./../../images/mainImage.png";
import bracketsone from "./../../images/bracketsCurlyone.svg";
import linkedinLogo from "./../../images/linkedinLogo.svg";
import githubLogo from "./../../images/githubLogo.svg";
import emailjs from "@emailjs/browser";
import "./MeComponent.scss";
import ButtonComponent from "./../../common/ButtonComponent";
export default class MeComponent extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.form = React.createRef();
    this.inputMail = React.createRef();
  }
  componentDidMount(){
    this.inputMail.current.focus()
  }
  sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m26lvug",
        "template_tk9vkbt",
        this.form.current,
        "user_YlD5ioViXuYgbebfn4pEg"
      )
      .then(
        (result) => {
          this.inputMail.current.value=""
          this.inputMail.current.placeholder = "Thanks! I will mail you ASAP"

        },
        (error) => {
          this.inputMail.current.value=""
          this.inputMail.current.placeholder = "Please try again. Something is bad"
        }
      );
  }

  render() {
    return (
      <div className="meComponentContainer">
        <div className="profilePicture">
          <div className="logosLink">
            <a href="https://www.linkedin.com/in/rahulsolanki11292/" target="_blank" rel="noreferrer">
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="https://github.com/rahul11292" target="_blank" rel="noreferrer">
              <img src={githubLogo} alt="" />
            </a>
          </div>

          <img className="picture" src={meBackgroundPaper} alt="" />
          <ButtonComponent label="Want my resume ?" width={220} size="1.9rem" />
        </div>
        <div className="aboutme">
          <h2>Salut!</h2>
          <div className="inBox">
            <ul>
              <li>I am Rahul Solanki</li>
              <li>
                I have an experience of 4.5 years, from mechanical design
                engineer to Front End development.
              </li>
              <div className="groupBracket">
                <li className="insideBrackets">
                  <p>I like</p>
                  <div className="items">
                    <img src={bracketsone} alt="" />
                    <p>to learn</p>
                    <p>to draw</p>
                    <p>Math</p>
                    <p>Science</p>
                    <p>Technology</p>
                  </div>
                </li>
                <li className="insideBrackets">
                  <p>I am</p>
                  <div className="items">
                    <img
                      src={bracketsone}
                      alt=""
                      style={{
                        width: "2em",
                        left: "-40px",
                        transform: "skew(-8deg, -13deg)",
                      }}
                    />
                    <p>a lot curious</p>
                    <p>little innovative</p>
                    <p>little creative</p>
                    <p>always learning</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          {/* <p>
                    Personally and professionally, I believe in learning because it is the best way to be a better version of oneself. I admire curiosity, it pushes you to discover and resolve problems. I always seek challenges because it keeps you growing and gives you experience.
                    </p> */}
        </div>
        <div className="emailContact">
          <form ref={this.form} onSubmit={this.sendEmail}>
            <input
              type="email"
              name="email"
              placeholder="Want to talk ? Pls send your mail ID."
              autoComplete="off"
              ref={this.inputMail}
            />
            <input  type="submit" value=''/>
          </form>
        </div>
      </div>
    );
  }
}
