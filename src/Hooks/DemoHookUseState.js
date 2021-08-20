import React, {useState} from 'react'

export default function DemoHookUseState(props) {

  let [state, setState] = useState({
    like:0,
  });

    const handleLike = () =>{
      setState({like: state.like + 1});
    }

  return (
    <div className="container">
      <div className="card text-left">
        <img width="150" height ='50' src='https://picsum.photos/id/200/200' alt='picture' className='card-img-top'></img>
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{color: 'red'}}>{state.like} Like</p>
        </div>
        <button onClick={handleLike} className="btn btn-primary">Button</button>
      </div>
    </div>
  )
}
