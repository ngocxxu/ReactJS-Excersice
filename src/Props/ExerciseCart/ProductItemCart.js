import React, { Component } from "react";

export default class ProductItemCart extends Component {
  render() {
    let { sp, themGioHang } = this.props;

    return (
      <div className="card">
        <img style={{ height: 350 }} src={sp.hinhAnh} alt="..." />
        <div className="card-body">
          <h3>{sp.tenSP}</h3>
          <p>{sp.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              //Click vào gọi lại hàm themGioHang(ExerciseCartComponent)
              themGioHang(sp);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
