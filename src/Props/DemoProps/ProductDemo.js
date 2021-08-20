import React, { Component } from 'react'

export default class ProductDemo extends Component {

    render() {
        //this.props: thuộc tính có sẵn của RCC
        /*
            Phân biệt (Sự khác biệt) giữa state và props ?
            + Giống nhau; Cả đều là thuộc tính có sẵn của react class component để bindding dữ liệu hiển thị lên giao diện
            + Khác nhau:
            this.state dùng để chứa các giá trị thay đổi trên giao diện và có thể gán lại được thông qua phương thức setState
            this.props dùng để nhận giá trị từ component cha (nơi sử dụng thẻ đó) truyền vào. Và lưu ý không thể gán lại giá trị đó.
        */
        let {product} = this.props;

        return (
            <div className="card">
                <img src={product.img} alt="..." />
                <div className="card-body bg-dark text-white">
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </div>
            </div>
        )
    }
}
