import React from "react";
import Cart from './Cart';

const CartList = ({ robots }) => {
    const cartConponent = robots.map((user, i) =>{
        return (<Cart
         key={i}
         id={robots[i].id}
         name={robots[i].name}
         email={robots[i].email}
         />
        );
    });
     return (
         <div>
              {cartConponent}
         </div>
      
     );
}

export default CartList;