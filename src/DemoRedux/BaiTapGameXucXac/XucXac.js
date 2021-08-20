import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderKetQua = () => {
    //tính tổng điểm
    let tongDiem = this.props.mangXucXac.reduce((tong, xxnn, index) => {
      return (tong += xxnn.diem);
    }, 0);
    let ketQua = tongDiem > 11 ? "Tài" : "Xỉu";
    return `${tongDiem} - ${ketQua}`;
  };

  render() {
    //props redux
    let { mangXucXac } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: true,
                };
                this.props.dispatch(action);
              }}
              className="btn btn-danger"
            >
              <div className="p-5 display-4">Tài</div>
            </button>
          </div>
          <div className="col-6 text-center">
            <img width={50} alt="..." src={mangXucXac[0].hinhAnh}></img>
            <img width={50} alt="..." src={mangXucXac[1].hinhAnh}></img>
            <img width={50} alt="..." src={mangXucXac[2].hinhAnh}></img>
            <br></br>
            <div className="display-4">{this.renderKetQua()}</div>
          </div>
          <div className="col-3">
            <button
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: false,
                };
                this.props.dispatch(action);
              }}
              className="btn bg-dark text-white"
            >
              <div className="p-5 display-4">Xỉu</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
//ham giúp lấy dữ liệu state từ redux về
const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.BaiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
