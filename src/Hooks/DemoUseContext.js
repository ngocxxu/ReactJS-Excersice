import React, { useContext } from "react";
import { context } from "./Context/ContextProvider";


let arrProduct = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "iphoneX", price: 2000 },
  { id: 3, name: "iphoneXS", price: 3000 },
];


export default function DemoUseContext(props) {
  // let store = useContext(context); //cách ghi 1
  // let cartReducer = store.cartReducer; //cách ghi 2
  let { cartReducer } = useContext(context); //cách ghi 3
  //giỏ hàng
  let [cart, dispatch] = cartReducer;
  console.log(cartReducer);
  console.log("cart", cart);
  const addToCart = (itemClick) => {
    // console.log(itemClick);
    const action = {
      type: "addToCart",
      item: itemClick,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card text-left">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/id/200/200"
                  alt
                />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>GioHang</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.quantity * product.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => {}}>
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
