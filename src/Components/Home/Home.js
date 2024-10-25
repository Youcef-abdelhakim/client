import React, { Fragment, useEffect, useState } from 'react'
import Img1 from '../../pictures/p1.jpg'
// import {categories, perfumes} from '../../data';
import Product from './Product';

// useMemo!
const Home = ({cart,categories, perfumes, addtoCart, prf}) =>{

  
    return(
        <Fragment>
        <section className='picture-section section1'>

        <img src={Img1} className='pictr'></img>

            <div className='introduction'>
                <h1>
                Luxe Scents
                </h1>
                <h2>
                    Welcome to our exclusive collection of perfumes
                </h2>
                <p>
                Indulge in the luxury of our premium perfumes,
                crafted with the finest ingredients from around 
                the world. Each bottle is a masterpiece, designed
                to captivate your senses and leave a lasting
                impression. Experience the essence of elegance 
                </p>
                <a href='#products'>
                    Shope Now
                </a>
            </div>

        </section>

        <section className='products' id ='products'>
            <div className='title'><h1><span>our</span> Products</h1></div>
            <div className='producte-continer'>
                {
                    categories.map(categorie => (
                        <div className='categorie' key={categorie}>
                            <div className='catname'>
                                <h2>{categorie}</h2>
                            </div>
                            <div className='crts'>
                            {perfumes.filter(prf => prf.category === categorie).map(prf => (
                                <Product key={`${prf.Quantity}`} parfume={prf} handleCallback={() => addtoCart(prf)} /> 
                            ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        <section className="footer" id="contact">
            <div className="first-part">
                <div className='titlelg'>
                    <h1>
                    Luxe Scents
                    </h1>
                </div>
                <div>
                    <h4>
                    Welcome to our exclusive collection of perfumes
                    Indulge in the luxury of our premium perfumes, 
                    crafted with the finest ingredients from around the
                    world. Each bottle is a masterpiece, designed to 
                    captivate your senses and leave a lasting impression.
                     Experience the essence of elegance
                    </h4>
                </div>
                <div className="contacts">
                    <a><i className='bx bxl-facebook-square' ></i></a>
                    <a><i className='bx bxl-instagram' ></i></a>
                    <a><i className='bx bxl-blogger' ></i></a>
                    <a><i className='bx bxl-pinterest-alt'></i></a>
                    <a><i className='bx bxs-map' ></i></a>
                </div>
            </div>
            <div className="second-part">
                <p>be always withe news</p>
                <input type="email" placeholder="youe email@luxe-scents"/> 
                <button>submit</button>               
            </div>
            
        </section>
        <p className="cop">&copy; 2024 Your Company Name. All rights reserved.</p>

    </Fragment>
    );
    
}
export default Home;

