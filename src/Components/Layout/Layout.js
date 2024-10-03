import React, { Fragment, useRef } from "react";
import {Link, Outlet} from 'react-router-dom' 

const Layout = () =>{
    const navRef = useRef()
    const handledisplay = () =>{
        navRef.current.classList.toggle('display');
    }
    // console.log(navRef.current);



    return(
        <Fragment>
        <header>
            <div id="Logo" className="logo">
                <h1>
                Luxe Scents
                </h1>
            </div>
            <nav>
                <Link className="link" to="/">Home</Link>
                <a className="link" href="#products">Shope</a>
                <Link className="link">About us</Link>
                <a className="link" href="#contact">Contact Us</a>
                <Link className="link">Blog</Link>
                <a className=" aa" onClick={handledisplay}><i className='bx bx-list-ul'></i></a>
            </nav>
            <div className="cart">
                <Link className="link2" to="/cart"><i className='bx bx-cart' ></i></Link>
                <Link className="link2"><i className='bx bx-log-in-circle'></i></Link>
                <a className="link2" href="#products"><i className='bx bxs-store'></i></a>
                
               
            </div>
            <div className="navelist" ref ={navRef}>
            <ul>
                <li><Link to="/">Home</Link></li>
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


    </Fragment>
    );
}
export default Layout;