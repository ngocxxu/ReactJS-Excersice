import React from "react";
import { useSprings, useSpring, animated } from "react-spring";

//useSpring: render ra đồng loạt

export default function Ex3UseSpring(props) {
  let arrOpacity = [
    { opacity: 0.1, color: "#000000", content: "Fullstack", num: 100 },
    { opacity: 0.3, color: "#777313", content: "Frontend", num: 200 },
    { opacity: 0.5, color: "#987456", content: "Backend", num: 300 },
    { opacity: 0.7, color: "#159852", content: "BipBip", num: 400 },
    { opacity: 1, color: "#452368", content: "YinYang", num: 500 },
  ];

  // console.log(arrOpacity.length)

  let propsAnimationUseSprings = useSprings(
    arrOpacity.length,   //giới hạn số lần lặp
    arrOpacity.map((item) => ({
      opacity: item.opacity, //trạng thái đích đến (to)
      color: item.color,
      content: item.content,
      num: item.num,
      from: {
        opacity: 0,
        content: item.content,
        num: 0,
      },
      config: { duration: 3000 },
    }))
  );

  //cách viết 2
  let renderContent = (propsAnim) => {
    let resultAnimComponent = [];

    for(let key in propsAnim) {
      if( key === 'num' || key === 'content' ) {
        resultAnimComponent.push(
          <animated.h1 style={propsAnim}>
            {propsAnim[key]}
          </animated.h1>
        )
      }
    }
    return resultAnimComponent;
  };

  return (
    <div>
      {/* //lặp mảng các thẻ div */}
      {propsAnimationUseSprings.map((propsAnim, index) => {
        //cách viết 1:
        // return (
        //   <div className="container">
        //     <div className="row">
        //       <div className="col-6">
        //         <animated.h1 style={propsAnim} key={index}>
        //           {propsAnim.num}
        //         </animated.h1>
        //       </div>
        //       <div className="col-3">
        //         <animated.h2 style={propsAnim} key={index}>
        //           {propsAnim.content}
        //         </animated.h2>
        //       </div>
        //     </div>
        //   </div>
        // );

        //cách viết 2:
        return <div>{renderContent(propsAnim)}</div>;
      })}
    </div>
  );
}
