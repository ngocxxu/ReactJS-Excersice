import React from 'react'

export default function CardProduct(props) {



    let {product} = props;
    return (
        <div className="card">
            <img src={product.img} alt="..." />
            <div className="card-body bg-dark text-white">
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
            </div>
        </div>
    )
}
