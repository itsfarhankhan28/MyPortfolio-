// import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
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
      className='flex flex-col justify-center md:w-[30rem] xxsm:w-[18rem] h-fit rounded-[10px] bg-custom-warm p-3'
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
      <div className="flex md:flex-row xxsm:flex-col md:gap-10">
        <div className="font-herofont">
          <h1 className="font-semibold text-2xl my-1">{props.projectTitle}</h1>
          <p >
            {props.projectInfo}
          </p>
          <Button btnName="View Source Code" btnlink={props.link}/>
        </div>
        <div>
          <img className="mt-10" src={props.image} alt="" />
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
