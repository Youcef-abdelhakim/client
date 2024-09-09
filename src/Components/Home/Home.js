import React, { Fragment } from 'react'
import Img1 from '../../pictures/p1.jpg'
import {categories, perfumes} from '../../data';
const Home = () =>{
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
                <div className='Nish'>
                    <h3>Nish parfumes</h3>
                    
                </div>
                <div className='casual'>
                    <h3>Casual</h3>
                    <div className='continer'></div>
                </div>
                <div className='designer'>
                    <h3>designer</h3>
                    <div className='continer'></div>
                </div>
                <div className='women'>
                    <h3>Women</h3>
                    <div className='continer'></div>
                </div>
            </div>
        </section>
    </Fragment>
    );
}
export default Home;