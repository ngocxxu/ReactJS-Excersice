import React, { useState, useEffect } from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoUseEffect(props) {
  let [number, setNumber] = useState(1);
  let [like, setLike] = useState(1);

  //useEffect là hàm chạy sau khi giao diện render , thay cho didUpdate và didMount cho mọi trường hợp
  // useEffect(()=>{
  //   console.log("abc")
  // })

  //thay cho didMount, chạy 1 lần
  // useEffect(()=>{
  //   console.log("abc")
  // },[])

  //thay thê didUpdate, truyền vô 1 number nếu muốn hàm UseEffect chạy lại, cứ mỗi lần number dc kích hoạt thì useEffect chạy
  // useEffect(()=>{
  //   console.log("didUpdate")
  // },[number])


  useEffect(()=>{
    console.log("didUpdate")
    return () =>{
      //viet cho willUnmount, ko chạy lần đầu dưới console.log
      console.log('willUnmount')

    }

  },[number])


  const handleIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <button onClick={()=>{
        setLike(like+1)
      }}>Like</button>
      <div className="card text-left w-50">
        <img width="50" 
          className="card-img-top"
          src="https://picsum.photos/id/200/200"
          alt
        />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">{number} Like</p>
        </div>
      </div>
      <button className="btn btn-danger" onClick={handleIncrease}>
        +
      </button>
    {like === 1 ? <ChildUseEffect></ChildUseEffect> : ''}
    </div>
  );
}
