import React, { Component } from 'react'
import SanPham from './SanPham'
export default class DanhSachSanPham extends Component {
    renderSanPham=() => {
        return this.props.mangSanPham.map((sanPham, index)=>{
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham}></SanPham>
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderSanPham()}
            </div>
        )
    }
}
