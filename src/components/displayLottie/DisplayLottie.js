import React, {Component, Suspense} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie options={defaultOptions} 
                isClickToPauseDisabled={true} 
                interactivity={{visibility: [0.50, 1.0], type: "play"}}/>
      </Suspense>
    );
  }
}
