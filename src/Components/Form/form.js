import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';

const FormC = ({total, products}) =>{

    const [userinfos, setInfos] = useState({});

    const handleOrderConfirmation = (e) =>{
        const {name, value} = e.target;
        setInfos(prev =>({
            ...prev,
            [name] : value
        }))
    }
    useEffect(() =>{
        console.log(products);
    }, [])

    const handle = (e) =>{
        

        console.log(userinfos);
        const order = {
            firstName: userinfos.first_name,
            lastName: userinfos.last_name,
            email: userinfos.email,
            phone: userinfos.phone_number,
            adress: userinfos.address,
            deleverypoint: userinfos.delvery, // Ensure this matches your backend
            products: products,
            totalPrice: total
        }
        console.dir(order);
        // alert(userinfos.total)

        axios.post('http://localhost:8000/api/order/ordera', order)
        .then(res =>{
            alert('res', res.data);
        })
        .catch(err =>{
            alert('error', err);
            console.log('error', err);
        })
    }

    const isvalid = userinfos.first_name &&
    userinfos.last_name  &&
    userinfos.email      &&
    /^(05|06|07)\d{8}$/.test(userinfos.phone_number) &&
    userinfos.address    &&
    userinfos.delvery ;


    return(
        <section className="userform">
            <div className="form-title">
                <h1><span>Your</span> Confirmation</h1>
            </div>

            <div className="form">
                <h1>Total price of your comand is £ {total}</h1>
                <form>
                    <span>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" placeholder="First Name" id="Firstname" name="first_name" onChange={handleOrderConfirmation}/>
                    </span>

                    <span>
                        <label htmlFor="lastname">Last Name</label>
                        <input  type="text" placeholder="Last Name" id="lastname" name="last_name" onChange={handleOrderConfirmation}/>
                    </span>

                    <span>
                        <label htmlFor= "email">Email</label>
                        <input type="email" placeholder="email" id="email" name="email" onChange={handleOrderConfirmation}/>
                    </span>

                    <span>
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" placeholder="Phone Number" id="phone" name="phone_number" onChange={handleOrderConfirmation} maxLength={10}/>
                    </span>

                    <span>
                        <label htmlFor="address">address</label>
                        <input type="text" placeholder="Town" id="address" name="address" onChange={handleOrderConfirmation}/>
                    </span>

                    <span className="delev">
                        <p>Choose where you want to get your product?</p>
                        <input type="radio" name="delvery" id="Home" value="Home" onChange={handleOrderConfirmation}/> 
                        <label htmlFor="Home">Home</label>
                        <input type="radio" name="delvery" id="office" value="office" onChange={handleOrderConfirmation} />
                        <label htmlFor="office">Office</label>
                        <button type="submit" disabled={!isvalid} onClick={handle}>Submit</button>
                    </span>                    
                </form>
            </div>
        </section>
    )
}

export default FormC;

