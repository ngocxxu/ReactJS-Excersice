import React, { Component } from 'react'
import ProductItem from './ProductItem';
export default class ProductList extends Component {



    renderProduct = () => {

        // console.log(<div></div>)


        return this.props.arrProduct.map((product,index)=> {
            return <div className="col-4 mt-2" key={index}>
                   <ProductItem prd={product} />
            </div>
        });
    }



    render() {

        //Từ mảng tạo ra giao diện như bài tập và sử dụng thẻ <ProductItem /> để hiển thị thông tin sản phẩm
        console.log(this.props.arrProduct); //[
       
        return (
            <div>
                <h3 className="text-center">Shoes shop</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
