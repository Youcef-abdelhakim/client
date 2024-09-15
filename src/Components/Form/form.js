import React from "react";
import { Link } from "react-router-dom";
const FormC = () =>{
    return(
        <section className="form-section">
            <div className="form-continer">
                <div className="form-title">
                    <h1>
                        <span>Your</span> Confirmation
                    </h1>
                </div>
                <div className="form">
                    <form>
                        <div className="p1"><input type="text" placeholder="First Name"/> <input type="text" placeholder="last Name"/></div>
                        <div><input type="email" placeholder="You email"/></div>
                        <div><input type="number" placeholder="Your Phone Number"/></div>
                        <div><input type="text" placeholder="Your adress"/></div>
                    </form>
                    <Link>BUY</Link>
                </div>
            </div>
        </section>
    )
}

export default FormC;