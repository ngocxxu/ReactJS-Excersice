import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img style={{ height: 350 }} src={sanPham.hinhAnh} alt="..." />
        <div className="card-body">
          <h3>{sanPham.tenSP}</h3>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              const action = {
                type: "THEM_GIO_HANG", //thuộc tính bat buoc để xử lý
                sanPhamClick: sanPham,
              };
              //đưa data lên redux
              this.props.dispatch(action);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(SanPham);
