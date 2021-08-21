import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

//useTrail: render ra lần lượt

const items = [
  { title: "frontend", content: "cybersoft" },
  { title: "backend", content: "cyber" },
  { title: "fullstack", content: "soft" },
];

export default function Ex4UseTrail(props) {
  let [status, setStatus] = useState(true);

  const [propsUseTrail, set, stop] = useTrail(items.length, () => {
    return {
      //giá trị đích đến
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 80 : 0,
      color: "red",
      //giá trị mặc định ban đầu
      from: { opacity: 0, x: 20, height: 0, color: "green" },
      config: { duration: 1000 },
    };
  });

  //set: component ko render lai, chỉ có animation chạy lại thui
  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 80 : 0,
    color: "red",
    //giá trị mặc định ban đầu
    from: { opacity: 0, x: 20, height: 0, color: "green" },
    config: { duration: 2000 },
  });

  console.log("status1", status);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setStatus(!status) //moi lan click la page render lai, render lại component
        }}
      >
        Click Me
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          set({ color: "yellow" }); //set: component ko render lai, chỉ có animation chạy lại thui
        }}
      >
        Click Color
      </button>

      {propsUseTrail.map((propsUseSpring, index) => {
        return (
          <div>
            <animated.h1 key={index} style={propsUseSpring}>
              {items[index].title}
            </animated.h1>
          </div>
        );
      })}
    </div>
  );
}
