import React from "react";
import "./GithubProfileCard.scss";
import {Fade} from "react-reveal";

export default function GithubProfileCard({greeting}) {

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="image-content-profile">
          <img
            src={greeting.profilePicture}
            alt={greeting.username}
            className="profile-image"
          />
        </div>
      </div>
    </Fade>
  );
}
