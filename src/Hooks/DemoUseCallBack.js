import React, {useState,memo,useCallback} from 'react'
import ChildUseCallBack from './ChildUseCallBack';

export default function DemoUseCallBack(props) {
  let [like,setLike] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like}`
  }
  //useCallback dùng để quyết định xem hàm function đó có cần render lại hay ko



  //hàm renderNotify sẽ ko bị gọi lại sau render, nếu tham số 2 ta để trống []
  // let callBackRenderNotify = useCallback(renderNotify,[])

  //hàm renderNotify bị gọi lại, do ta truyền vao tham số t2 1 giá trị thay đổi state, làm kích hoạt hàm renderNotify
  let callBackRenderNotify = useCallback(renderNotify,[])

  //useMemo cũng giống useCallback, nhưng useMemo trả giá trị là 1 obj, nghĩa là obj nào đó mà bạn ko mún nó render lại thì dùng useMemo
  //hoặc chỉ thay đổi với state nào đó cần render thui.

  
  return (
    <div className="m-5">
      Like: {like} 
      <br></br>
      <button onClick={() =>{
        setLike(like+1)
      }}>Tim</button>

      <br></br>
      <ChildUseCallBack renderNotify={callBackRenderNotify} like={like}></ChildUseCallBack>
    </div>
  )
}
