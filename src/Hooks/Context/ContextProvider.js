import React, {useReducer} from 'react'

//dùng context để bao toàn bộ component bên dưới lại
export const  context = React.createContext();

const initialCart = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addToCart':{
      let cartUpdate = [...state];
      let index  = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id);
      if(index !== -1){
        cartUpdate[index].quantity += 1 
      }else{
        const itemCart = {...action.item, quantity:1};
        cartUpdate.push(itemCart);
      }

      return cartUpdate;
    }
  }

  return [...state];
};



export default function ContextProvider(props) {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);

  //dùng context bao bọc all component bên trong (cụ thể là app)

  //store giống rootReducer, chứa nhìu state bên trong
  const store = {
    cartReducer: [cart, dispatch]
  }

  return (
    <context.Provider value={store}>
      {props.children}
    </context.Provider>
  )
}
