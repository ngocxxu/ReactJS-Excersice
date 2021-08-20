import React, { Component } from 'react'

export default class SanPham extends Component {


    render() {
        let {sp,xemChiTiet} = this.props;

        return (
            <div className="card">
                <img src={sp.hinhAnh} alt="..." height={350} />
                <div className="card-body">
                    <h3>{sp.tenSP}</h3>
                    <p>{sp.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {
                        xemChiTiet(sp);
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
