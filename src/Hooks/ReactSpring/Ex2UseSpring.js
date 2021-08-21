import React from "react";
import { useSpring, animated } from "react-spring";

export default function Ex2UseSpring(props) {
  //cach viet 1:
  // let propsUseSpring = useSpring({
  //   color: [131,111,255],
  //   from: {
  //     color: [238,99,99]
  //   },
  //   config: { duration: 2000 }

  // })

  //cách 2: dùng bóc tách phần tử
  let { color, ...propsUseSpring } = useSpring({
    color: [131, 111, 255],
    from: {
      color: [238, 99, 99],
    },
    config: { duration: 2000 },
  });

  //tăng font chữ, tăng độ dài
  let propsAnimations = useSpring({
    to: async (next, cancel) => {
      await next({
        width: "100%",
        height: "100%",
        fontSize: "50px",
      });
      await next({
        width: "50%",
        height: "50%",
        fontSize: "10px",
      });
      //dùng return để những thằng đằng sau nó ko thực thi nữa
      // return 
      await next({
        width: "100%",
        height: "100%",
        fontSize: "50px",
      });
    },
    from: {
      width: "0%",
      height: "0%",
      fontSize: "10px",
    },
    config: { duration: 3000 }, //mỗi 1 await thực thi trog vòng 3s
  });

  return (
    <div>
      <animated.h1
        style={{
          //cach viet 1:
          // color: propsUseSpring.color.interpolate((r,g,b) => {
          //   return `rgb(${r},${g},${b})`;
          //cach 2:
          color: color.interpolate((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        HELLO
      </animated.h1>

      <animated.div style={propsAnimations}>
        <span>CYBERSOFT</span>
        <p>
          Hello mọi người
        </p>
      </animated.div>


    </div>
  );
}
