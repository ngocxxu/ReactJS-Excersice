import React from "react";
import { useSpring, animated } from "react-spring";

export default function DemoUseSpring(props) {
  const propsAnim = useSpring({
    color_text: "red",
    from: { color_text: "green" },
    config: { duration: 1000 },
  });

  const propsAnimNumber = useSpring({
    num: 300, color:'red',
    from: { num: 10, color: 'green' },
    config: { duration: 2000 },
  });

  const propsAnimScroll = useSpring({
    scroll: 100,
    from: {scroll:0},
    config: { duration: 1000 },

  })

  return (
    <div>
      <h1>Change color text</h1>
      <animated.div
        style={{
          color: propsAnim.color_text,
        }}
      >
        Hello everyone
      </animated.div>
      <hr></hr>
      <h1>Change Number</h1>
      <animated.h1 style={{
        color: propsAnimNumber.color
      }}>{propsAnimNumber.num}</animated.h1>
      <animated.p style={{ fontSize: propsAnimNumber.num }}>1</animated.p>
      <hr></hr>
      <h1>Change scroll</h1>
      <animated.div scrollTop={propsAnimScroll.scroll}></animated.div>
    </div>
  );
}
