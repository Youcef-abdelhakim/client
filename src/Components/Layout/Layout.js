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
                <Link className="link">Contact Us</Link>
                <Link className="link">Blog</Link>
                <a className=" aa" onClick={handledisplay}><i className='bx bx-list-ul'></i></a>
            </nav>
            <div className="cart">
                <Link className="link2"><i className='bx bx-cart' ></i></Link>
                <Link className="link2"><i className='bx bx-log-in-circle'></i></Link>
                <Link className="link2"><i className='bx bxs-store'></i></Link>
                
               
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


    </Fragment>
    );
}
export default Layout;