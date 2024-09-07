import React, { Fragment } from "react";
import {Link, Outlet} from 'react-router-dom' 

const Layout = () =>{
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
                <Link className="link">Shope</Link>
                <Link className="link">About us</Link>
                <Link className="link">Contact Us</Link>
                <Link className="link">Blog</Link>
            </nav>
            <div className="cart">
                <Link className="link2"><i className='bx bx-cart' ></i></Link>
                <Link className="link2"><i class='bx bx-log-in-circle'></i></Link>
                <Link className="link2"><i class='bx bxs-store'></i></Link>
               
            </div>

        </header>
        <main>
            <Outlet/>
        </main>
    </Fragment>
    );
}
export default Layout;