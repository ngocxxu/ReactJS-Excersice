import React, { Component } from "react";
//thư viện ket noi redux
import { connect } from "react-redux";

class GioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} alt="..." height={50} width={50}></img>
          </td>
          <td>{spGH.giaBan}</td>
          <td>
            <button
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSPClick: spGH.maSP,
                  soLuong: 1,
                };
                this.props.dispatch(action);
              }}
            >
              +
            </button>
            {spGH.soLuong}
            <button
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSPClick: spGH.maSP,
                  soLuong: -1,
                };
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{spGH.soLuong * spGH.giaBan}</td>
          <td>
            <button
              onClick={() => {
                //cách 1
                // const action = {
                //   type: "XOA_GIO_HANG",
                //   maSPClick: spGH.maSP,
                // };
                this.props.xoaGioHang(spGH.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ hàng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Giá bán</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{this.renderGioHang()}</tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//hàm giúp gửi data lên redux
const mapDispatchToProps = (dispatch) => {
  //trả về props là hàm
  return {
    xoaGioHang: (maSPClick) => {
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick: maSPClick,

      };
      dispatch(action);
    },
  };
};

//hàm lấy gtri state từ redux để biến đổi thành props của component

const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.gioHangReducer,
  };
};

//HOC
const ComponentGioHangRedux = connect(mapStateToProps,mapDispatchToProps)(GioHang);
export default ComponentGioHangRedux;
