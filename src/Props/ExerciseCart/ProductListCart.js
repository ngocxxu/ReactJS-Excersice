import React, { Component } from "react";
import Cart from "./Cart";
import ProductItemCart from "./ProductItemCart";

export default class ProductListCart extends Component {
  // renderSanPham = ()=>{
  //     let {mangSanPham} = this.props;
  //     return mangSanPham.map
  // }

  render() {
    let { mangSanPham, themGioHang } = this.props;

    return (
      <div className="row">
        {mangSanPham.map((sanPham, index) => {
          return (
            <div className="col-4" key={index}>
              <ProductItemCart themGioHang={themGioHang} sp={sanPham} />
            </div>
          );
        })}

        {/* <Cart /> */}
      </div>
    );
  }
}
