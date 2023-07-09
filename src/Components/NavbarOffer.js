import React,{useEffect,useState} from "react";
import {COLORS } from "../Common/Constant";
import {Wrapper} from "../Assets/Style/NaveBarOffer";
import {OFFERMESSAGE} from "../Common/Constant";

function NavbarOffer() {
  const [color, setColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (color === COLORS.length - 1) {
        setColor(0);
      } else {
        setColor(color + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ color]);

  return (
    <Wrapper style={{ backgroundColor: `${COLORS[color]}` }}>
     {OFFERMESSAGE}
    </Wrapper>
  );
}

export default NavbarOffer;
