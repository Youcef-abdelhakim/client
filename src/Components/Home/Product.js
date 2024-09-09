import React, { Fragment } from "react";


const Product = ({parfume}) =>{


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
                <h2>{parfume.name}</h2>
                <h3>{parfume.brand}</h3>
                <p className={stockStyle(parfume.state)}>{parfume.state}</p>
                <a>Add to Card</a>
                <a>View details</a>
            </div>
        </Fragment>
    );
}
export default Product