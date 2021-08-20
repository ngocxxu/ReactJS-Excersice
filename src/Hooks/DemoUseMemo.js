import React, { useMemo, useState } from "react";
import ChildUseMemo from "./ChildUseMemo";

export default function DemoUseMemo(props) {
  let [like, setLike] = useState(1);
  let cart = [
    { id: 1, name: "iphone", price: 1000 },
    { id: 2, name: "iphoneX", price: 2000 },
    { id: 3, name: "iphoneXS", price: 3000 },
  ];

  //useMemo cũng giống useCallback, nhưng useMemo trả giá trị là 1 obj, nghĩa là obj nào đó mà bạn ko mún nó render lại thì dùng useMemo
  //hoặc chỉ thay đổi với state nào đó cần render thui.

  const cartMemo = useMemo(() => cart, []);

  //like thay đổi thì obj cart sẽ load lại sau khi like thay đổi
  // const cartMemo = useMemo(() => cart, [like]);

  //cách 2:
  // const renderCart = () =>{
  //   let cart = [
  //     { id: 1, name: "iphone", price: 1000 },
  //     { id: 2, name: "iphoneX", price: 2000 },
  //     { id: 3, name: "iphoneXS", price: 3000 },
  //   ];
  //   return cart;
  //   }

  //   const cartMemo = useMemo(renderCart, []);

  return (
    <div className="m-5">
      Like: {like}
      <br></br>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tim
      </button>
      <br></br>
      <ChildUseMemo
        cart={cartMemo}
      ></ChildUseMemo>
    </div>
  );
}
