import React, { Fragment } from "react";


const Product = ({parfume, handleCallback}) =>{

    const stockStyle = (stock) =>{
        if(stock === "In Stock"){
            return'green';
        }
        else{
            return'red';
        }
    }  



        


    return(
        <Fragment>
            <div className="product-card">
                <img src={parfume.pictureUrl} alt={parfume.name}/>
                <h4>{parfume.name}</h4>
                <h5>{parfume.brand}</h5>
                <h5 className="price">£{parfume.price}</h5>
                <p className={stockStyle(parfume.state)}>{parfume.state}</p>
                <a className="add" onClick={handleCallback}>Add to Card<i className='bx bx-cart-add'></i></a>
                <a className="det">View details</a>
            </div>
        </Fragment>
    );
}
export default Product