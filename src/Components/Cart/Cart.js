import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({cart, removeforCart, total}) =>{

    const empty = cart.length === 0;

    


    return(
        <section className="cart1">
            <div className="cart-continer">
                <div className="cart-title">
                    <h1><span>Your</span> Cart</h1>
                </div>
                <div className="selected">
                    <ul>
                        {cart.map(list => (
                            <li key={list.id}>
                                <div className="cart-item">
                                    <h3>{list.name}</h3>
                                    <h3>{list.category}</h3>
                                    <h3 className="price-cart1">£ {list.pricen}</h3>
                                    <h4>Quantity: {list.quant}</h4>
                                    <a onClick={() => removeforCart(list)}><i className='bx bx-x'></i></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="cart-totalprice">
                        <h2>Total Price of Your Cart is: <span>£{total}</span></h2>
                </div>

                {!empty && 
                    (<div className="confirm-cart">
                        <Link to="/form" >
                            Confirm Order
                         </Link>
                    </div>)
                }
            </div>
        </section>
    );

}

export default Cart;
