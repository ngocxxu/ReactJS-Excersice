import React, {useState,useRef} from 'react'

export default function DemoUseRef(props) {

  let inputUserName = useRef(null);
  let inputPassword = useRef(null);
  let userName = useRef('');
  let [userLogin, setUserLogin] = useState({userName});

  const handleLogin = () =>{
    console.log('userName', userName.current);
    console.log('userName', userLogin.userName);

    userName.current = 'abc';
    setUserLogin({
      userName: userName.current,
    })
  }

  return (
    <div className="container">
      <h3>Login</h3>
      <div className="form-group">
        <h3>Username</h3>
        <input ref={inputUserName} name='userName' className="form-control"></input>
      </div>
      <div className="form-group">
        <h3>Password</h3>
        <input ref={inputPassword} name='password' className="form-control"></input>
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={() =>{handleLogin()}}>Login</button>
      </div>
    </div>
  )
}
