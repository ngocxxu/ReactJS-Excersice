import { useTransitions } from "react-spring";
import { animated } from "react-spring";
import React, { useState } from "react";

//mảng cố định, ko thay đổi thì ta để bên ngoài này

export default function Ex5UseTransition(props) {
  //vì mảng sẽ còn bị thay đổi như thêm xóa chỉnh sửa, nên ta đặt trong function

  const [arrItem, setArrayItem] = useState([
    { id: 1, title: "frontend", content: "cybersoft" },
    { id: 2, title: "backend", content: "cyber" },
    { id: 3, title: "fullstack", content: "soft" },
  ]);

  const [article, setArticle] = useState({
    id: '',
    title: '',
    content: '',
  })

  const propsUseTrasition = useTransitions(arrItem, item => item.id , {
    
    from: { transform: "translate3d(0,-40px,0)" }, //components từ vị trí trc khi render
    enter: { transform: "translate3d(0,0px,0)" }, //components tại thời điểm render
    leave: { transform: "translate3d(0,-40px,0)" }, //components bị xóa mất khỏi giao diện
    config: {duration:2000},

  });

  let renderItem = () => {

      //props này là của animation-transition
      //key sẽ chạy dưa trên các id có trong mảng
      return propsUseTrasition.map(({props,item,key}, index) => {
        return <animated.div style={props} key={index} className="bg-dark text-white p-3 mt-2">
          <div className="text-right">
            <button onClick={() => {
              {deleteItem(item.id)}
            }} className="btn btn-primary"></button>
          </div>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </animated.div>;
      });
  };

  let handleChange = (e) => {
    let {value, name} = e.target;
    setArticle({
      ...article,
      [name]: value,
    })
  }

  let handleSubmit = () => {
    let item = {...article, id: Date.now()};

    //cách viết push mảng item vào trong mảng arrItem
    setArrayItem([...arrItem,item])
  }

  let deleteItem = (id) => {
    //set lại arrItem mới =` cách lấy những phần tử khác id đó
    setArrayItem([...arrItem.filter(item => item.id !== id)]);
  }

  return <div className="container">

    {renderItem()}

    <div className="form-group">
      <h3>Title</h3>
      <input className="form-control" name = 'title' onChange={handleChange}></input>
    </div>
    <div className="form-group">
      <h3>Content</h3>
      <input className="form-control" name = 'content' onChange={handleChange}></input>
    </div>
    <div className="form-group">
      <button onClick={handleSubmit} className="btn btn-primary"></button>
    </div>
    </div>;
}
