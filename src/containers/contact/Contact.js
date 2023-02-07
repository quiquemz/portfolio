import React, {useContext} from "react";
import "./Contact.scss";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div id="contact-me">
        <div className="contact-div-main" >
          <div className="contact-header">
            <h1 className={["heading contact-title", isDark ? 'dark-mode' : ''].join(' ')}>{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.numberStylish}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.emailAddress}
              >
                {contactInfo.emailAddress}
              </a>
              <br />
              <br />
              
            </div>
          </div>
          
        </div>
      </div>
    </Fade>
  );
}
