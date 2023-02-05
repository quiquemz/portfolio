import React, {useContext, lazy, Suspense, useState, useEffect} from "react";
import {openSource} from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingWink from "../../assets/lottie/landingWink";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileImage = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileImage")
);

export default function Greeting() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);

  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact-me" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
          <Suspense fallback={renderLoader()}>
            <GithubProfileImage prof={prof} key={prof.id} />
          </Suspense>
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingWink} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )} */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
