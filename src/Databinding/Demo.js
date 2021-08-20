import React, { Component } from 'react';


export default class Demo extends Component {
    name = 'Sĩ';
    renderName = () => {

        return <span>
                {this.name} đẹp trai
        </span>
    }

    render() {
        // let productName = 'Iphone X';
        let product = { 
            name: 'I phone X',
            price: 5000
        }

        return (
            <div className="container">
                 <h3>Sản phẩm của : {this.renderName()}</h3>
                 <div className="card w-25 bg-dark text-white">
                    <img src="https://picsum.photos/200/200" alt="..." />

                    <div className="card-body bg-dark text-white">
                        <h3>{product.name}</h3>
                        <p>{product.price} $</p>
                        <button className="btn btn-success">Xem chi tiết</button>
                    </div>
                </div>
            </div>

        )
    }
}
