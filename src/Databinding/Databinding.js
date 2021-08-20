import React, { Component, Fragment } from 'react'

export default class Databinding extends Component {


    //Thuộc tính
    name = 'Khải';
    img = "https://picsum.photos/200/200"

    //Phương thức tự xây dựng
    renderCard = () => {
        let product = {
            id: 1,
            name: 'Iphone',
            price: 1000,
            img: 'https://picsum.photos/id/10/200/200'
        }
        return <div className="card w-25">
            <img src={product.img} alt="..." />
            <div className="card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-success">Mua hàng</button>
            </div>
        </div>
    }

    render() {
        //Khai báo biến, hàm (Khai báo sẽ có từ khoá let var const và được khai báo trong hàm và phương thức)
        let tenHocVien = 'Khải';
       
        return (
            <Fragment>
                <div className="container">
                    <div id="content"> {tenHocVien} </div>
                    <div id="content"> {this.name} </div>
                    <div className="card w-25">
                        <img src={this.img} alt="..." />
                    </div>
                    {this.renderCard()}
                </div>   
            </Fragment>
        )
    }
}
