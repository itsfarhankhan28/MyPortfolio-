// import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// import Button from "./Button";

function Card(props) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      // className={Styles.card}
      className='flex flex-col justify-center w-[30rem] h-fit rounded-[10px] bg-custom-warm p-3'
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {/* <img src={imagen} alt="" /> */}
      <div className="leading-[80px]">
      <h1 className="font-herofont text-2xl">Project</h1>
      <h1 className="font-herofont text-[80px] text-semibold">{props.serialNo}</h1>
      </div>
      <div className="border-solid border-2 border-gray-100 rounded-xl my-3"></div>
      <div className="grid grid-cols-2 gap-10">
        <p className="font-herofont">
          {props.projectInfo}
        </p>
        <img src={props.image} alt="" />
      </div>
      {/* <div className={Styles.btnn}>
        <Button text="Demo" />
        <Button text="Code" />
      </div> */}
    </animated.div>
  );
}

export default Card;
