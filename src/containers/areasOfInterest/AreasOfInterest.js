import React, {useContext} from "react";
import "./AreasOfInterest.scss";
import {areasOfInterest} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";


export default function AreasOfInterest() {
  const {isDark} = useContext(StyleContext);

  if (areasOfInterest.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="aoi-container" id="interests">
          <div>
            <h1 className={["aoi-heading", isDark ? 'dark-mode' : ''].join(' ')}>Areas of Interest</h1>
            <div className="aoi-cards-div">
              {areasOfInterest.areas.map((area, i) => {
                return (
                  <div key={i} className="aoi">
                    <i className={[area.fontAwesomeClassname, isDark ? 'dark-mode' : ''].join(' ')}></i>
                    <h3 className={isDark ? 'dark-mode' : ''}>{area.name}</h3>
                    <p className={["subTitle", "skills-text", isDark ? 'dark-mode' : ''].join(' ')}>{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
