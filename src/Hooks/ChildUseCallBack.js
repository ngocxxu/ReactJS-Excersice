import React, {memo} from 'react'

function ChildUseCallBack(props) {
  let title = 'cybersoft';
  let object = {
    id: 1, ten:'bono'
  }

  return (
    <div>
      <small>{props.renderNotify()}</small>
      <textarea></textarea>
      <button>GỬI</button>
    </div>
  )
}

//memo dùng để bao bọc component, giúp component này ko render lại trên giao diện => giúp tăng performance
export default memo(ChildUseCallBack);
