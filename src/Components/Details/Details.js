import React, { useEffect } from "react";
import { perfumes } from "../../data.js";
import { useParams } from "react-router-dom";

const Details = () =>{

    const {id} = useParams();
    const perfume = perfumes.find(perf => perf.id === id);    
    useEffect(()=>{
        console.log(perfume);
    },[perfume])
    return(
        <section className="delails-section">
            <div className="principal-continer">
                <div className="perf-details">
                    <h1>Details <span>About</span></h1>
                </div>
                <div className="prf-info">
                    <div className="prf-img">
                    <img src={perfume.pictureUrl} alt={perfume.name}/>
                    </div>
                    <div className="fiche">
                        <h2>{perfume.name}</h2>
                        <h3>{perfume.brand}</h3>
                        <h4>{perfume.state}</h4>
                        <h4>{perfume.price}</h4>
                        <p>{perfume.category}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;