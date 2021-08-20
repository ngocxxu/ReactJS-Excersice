import React, { Component } from 'react'
import Modal from './Modal';

export default class ProductItem extends Component {


    render() {
        let {item} = this.props;
        return (
            <div className="card">
                <img src={item.img} alt="..." />
                <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button className="btn btn-outline-danger" data-toggle="modal" data-target="#modelId" onClick={()=>{
                        this.props.viewDetail(item);
                    }}>Xem chi tiết</button>
                </div>

            </div>
        )
    }
}
