import React, {useEffect, useState} from 'react'

export default function ChildUseEffect(props) {
  let [number, setNumber] = useState(1);
  console.log('abcd')

  useEffect(()=>{
  //viet cho didMount, này luôn xuất hiện dưới console.log do chạy lần đầu hoặc number thay đổi
    console.log('didUpdate')
    return () =>{
      //viet cho willUnmount, ko chạy lần đầu dưới console.log
      console.log('willUnmount')

    }

  },[number])

  return (
    <div>
      <textarea></textarea>
      <br></br>
      <button class="btn btn-success" >Send</button>
    </div>
  )
}
