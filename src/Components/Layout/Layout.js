import React, { Fragment } from "react";
import {Link, Outlet} from 'react-router-dom' 

const Layout = ({ }) =>{

    const handledisplay = () =>{
        const nav = document.getElementById('navelist2');
        nav.classList.toggle('display');
    }



    return(
        <Fragment>
        <header>
            <div id="Logo" className="logo">
                <h1>
                Luxe Scents
                </h1>
            </div>
            <nav>
                <Link className="link">Home</Link>
                <a className="link" href="#products">Shope</a>
                <Link className="link">About us</Link>
                <a className="link" href="#contact">Contact Us</a>
                <Link className="link">Blog</Link>
                <a className=" aa" onClick={handledisplay}><i className='bx bx-list-ul'></i></a>
            </nav>
            <div className="cart">
                <Link className="link2"><i className='bx bx-cart' ></i></Link>
                <Link className="link2"><i className='bx bx-log-in-circle'></i></Link>
                <a className="link2" href="#products"><i className='bx bxs-store'></i></a>
                
               
            </div>
            <div className="navelist" id="navelist2">
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Shope</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Contact Us</Link></li>
                <li><Link>Blog</Link></li>
            </ul>
            <a className="exit" onClick={handledisplay}><i className='bx bx-x-circle'></i></a>
        </div>
        </header>

        <main>
            <Outlet/>
        </main>

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
export default Layout;