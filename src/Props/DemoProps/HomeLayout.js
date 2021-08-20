import React, { Component } from 'react';
import Footer from './Footer';
import ProductDemo from './ProductDemo';
import CardProduct from './CardProduct';
export default class HomeLayout extends Component {

    arrProduct = [
        {id:1,name:'Iphone', price:1000,img:'https://picsum.photos/id/1/200/200'},
        {id:2,name:'Iphone X', price:2000,img:'https://picsum.photos/id/2/200/200'},
        {id:3,name:'Iphone XS', price:3000,img:'https://picsum.photos/id/3/200/200'},
    ]
    render() {
        return (
            <div className="container">
                <h3>Home layout</h3>
                <input type="text" />
                
                <Footer bgColor="black" content="FrontEnd" />
                <Footer bgColor="red" content="Backend" />
                <Footer bgColor="yellow" content="FullStack" />
                <Footer bgColor="green" content="Cybersoft" />
                <hr />
                <h3>Product</h3>
                <div className="row">
                    <div className="col-4">
                        <ProductDemo product={this.arrProduct[0]} />
                    </div>
                    <div className="col-4">
                        <ProductDemo product={this.arrProduct[2]}/>
                    </div>
                    <div className="col-4">
                        <CardProduct product={this.arrProduct[2]}/>
                    </div>
                </div>

                
            </div>
        )
    }
}
