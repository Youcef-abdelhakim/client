import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { perfumes } from "../../data";


const Product = ({parfume, handleCallback}) =>{

    const stockStyle = (stock) =>{
        if(parfume.Quantity > 0){
            return'green';
        }
        else{
            return'red';
        }
    }  

    const state =   parfume.Quantity>0 ? "In Stock": "Out of Stock";
        
    

        


    return(
        <Fragment>
            <div className="product-card" key={parfume.Quantity}>
                <img src={`http://localhost:8000/${parfume.image}`} alt={parfume.name}/>
                <h4>{parfume.name}</h4>
                <h5>{parfume.brand}</h5>
                <h5 className="price">£{parfume.price}</h5>
                <p className={stockStyle(parfume.state)}>{state}</p>
                <a className="add" onClick={handleCallback}>Add to Card<i className='bx bx-cart-add'></i></a>
                <Link className="det" to= {`/Details/${parfume.id}`}>View details</Link>
            </div>
        </Fragment>
    );
}
export default Product