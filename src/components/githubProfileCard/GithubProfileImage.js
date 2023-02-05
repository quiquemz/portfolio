import React from "react";
import "./GithubProfileCard.scss";
// import SocialMedia from "../socialMedia/SocialMedia";
import {isHireable} from "../../portfolio";
// import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="image-content-profile">
          <img
            src={prof.avatarUrl}
            alt={prof.name}
            className="profile-image"
          />
        </div>
      </div>
    </Fade>
  );
}
