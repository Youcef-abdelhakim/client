import React, { Fragment, useEffect } from 'react'
import Img1 from '../../pictures/p1.jpg'
import {categories, perfumes} from '../../data';
import Product from './Product';

const Home = () =>{

    useEffect(() =>{
        console.log(perfumes);
        const maped_data = new Map();
        categories.forEach(categorie =>{
            maped_data.set(categorie, perfumes.filter(p => p.category === categorie.name));
        });
        console.log(maped_data);
    });



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
                        <div className='categorie' key={categorie.name}>
                            <div className='catname'>
                                <h2>{categorie.name}</h2>
                            </div>
                            <div className='crts'>
                            {perfumes.filter(prf => prf.category === categorie.name).map(prf => (
                                <Product key={`${categorie.id}_${prf.name}`} parfume={prf}/> 
                            ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>


    </Fragment>
    );
}
export default Home;