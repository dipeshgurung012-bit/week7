import React, { useState, useEffect } from "react";
import sunny from "./sunny.png";
import Rainy from "./rainy.png";
import Cloudy from "./cloudy.png";
function EmojiCounter(props) {
  console.log("pic is ", props.pic);
  const [pic, setPic] = useState(sunny);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("function called", props.pic);
    if (props.pic === "sunny") setPic(sunny);
    else if (props.pic === "Rainy") setPic(Rainy);
    else if (props.pic === "Cloudy") setPic(Cloudy);
  });
  const ClickHandle = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <p>
        {props.pic} <span></span>
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt="" />
        </button>
      </p>
    </div>
  );
}
export default EmojiCounter;
