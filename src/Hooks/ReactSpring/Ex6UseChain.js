import { useChain, useSpring, useTransition,animated } from "react-spring";
import React, { useRef, useState } from "react";

export default function Ex6UseChain() {



  //tạo 1 useSpring animation
  let springRef = useRef();

  const [arrContent, setArrayContent] = useState([
    { id: 1, title: "frontend", content: "cybersoft" },
    { id: 2, title: "backend", content: "cyber" },
    { id: 3, title: "fullstack", content: "soft" },
  ]);

  const propsAnim = useSpring({
    opacity: 1,
    width: "100%",
    height: "100%",
    from: { opacity: 0, width: "0%", height: "0%" },
    config: { duration: 2000 },
    ref: springRef,
  });

  //tạo 1 useTRansition
  let transitionRef = useRef();
  const transition = useTransition(arrContent, (item) => item.id, {
    from: { transform: "translate3d(0,-40px,0)" }, //components từ vị trí trc khi render
    enter: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
      width: "100%",
      height: "100%",
    }, //components tại thời điểm render
    leave: {
      transform: "translate3d(0,-40px,0)",
      opacity: 0,
      width: "0%",
      height: "0%",
    }, //components bị xóa mất khỏi giao diện
    config: { duration: 2000 },
    ref: transitionRef,
  });

  //kết hợp 2 useSpring
  useChain([springRef, transitionRef]);

  return (
    <div>
      <animated.div style={propsAnim}>
        {transition.map(({ item, key, props }) => {
          <animated.div
            style={props}
            key={key}
            className="bg-dark text-white p-3 mt-2"
          >
            <div className="text-right">
              <button
                onClick={() => {
                  {
                    setArrayContent([...arrContent.filter(article => article.id !== item.id)]);
                  }
                }}
                className="btn btn-danger"
              >X</button>
            </div>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </animated.div>;
        })}
      </animated.div>
    </div>
  );
}
