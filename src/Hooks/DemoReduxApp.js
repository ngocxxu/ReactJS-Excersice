import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAction } from "../redux/actions/FakeBookAction";

export default function DemoReduxApp(props) {
  //hàm useSelector thay cho hàm mapsStateToProps
  let comments = useSelector((state) => state.FakeBookReducer.comments);

  //lấy hàm dispatch từ useDispatch để gui gtri lên reducer, thay thế cho mapDispatchToProp
  let dispatch = useDispatch();

  //lấy thông tin ng dùng nhập vào
  let [userComment, setUserComment] = useState({
    name: "",
    content: "",
    avatar: "",
  });

  const handleChange = (event) => {
    let { value, name } = event.target;

    setUserComment({
      //khai báo để lưu lại giá trị trc đó, lấy lại giá trị cũ từ state ng dùng trc đó
      ...userComment,
      [name]: value,
    });
  };

  //submit thông tin ng dùng lên reducers
  const handleSubmit = (event) => {
    event.preventDefault(); //chặn trang browser bị reload lại (auto F5) 
    console.log('abc')
    let usComment = {...userComment,avatar: `https://i.pravatar.cc/150?u=${userComment.name}`}

    // let action = {
    //   type: 'add_comment',
    //   userComment: usComment,
    // }
    dispatch(addCommentAction(usComment));
  }

  return (
    <div className="container">
      <h3>Fakebook Apps</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img className="card-img-top" src={comment.avatar} alt />
                </div>
                <div className="col-10">
                  <h6 className="text-danger">{comment.name}</h6>
                  <h6 className="text-success">{comment.content}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              name="name"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              name="content"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-danger">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
