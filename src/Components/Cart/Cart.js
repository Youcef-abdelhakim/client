import React from "react";

const Cart = ({cart}) =>{

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
                                    <h3 className="price-cart1">£ {list.price}</h3>
                                    <h4>Quantity: 1</h4>
                                    <a><i className='bx bx-x'></i></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );

}

export default Cart;
