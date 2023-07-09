import React from "react";
import background from "../Assets/Image/background.jpg";
import {Wrapper} from "../Assets/Style/HeroSectionStyle";
import {COLLECTION ,STYLE ,EVERPIECE} from "../Common/Constant";

function HeroSection({image}) {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={image} className="garments-icon" alt="cental Hero"/>
        <div className="builder-block">
        {/* <div>{COLLECTION}</div>
        <div>{STYLE}</div>
        <div>{EVERPIECE}</div> */}
        </div>
      </div>
    </Wrapper>
  );
}

export default HeroSection;
