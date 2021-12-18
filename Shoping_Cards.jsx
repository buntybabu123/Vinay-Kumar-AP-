import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
// import data from "./data";

const Shoping_cards = ({data}) => {

    const [Data, setData] = useState(data);

    // add to cart function here 
    const addToCart = (index) => {
        const AddedToCart = Data.filter((curElem, ind) => {
            return ind === index;
        });
        setData(AddedToCart);
        console.log('clicked to cart');
    }
    return (
        <>
            {/* cards here */}
            <div className="container">
                <div className="row">
                    {
                        Data.map((curElem, index) => {
                            {/* console.log(curElem); */}
                            const {title, description, img} = curElem;
                            return (
                                <div className="col-sm-4 mb-5">
                                    <div className="card hover_effect" key={index}>
                                        <img src={img} />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description}</p>
                                            <NavLink to="/single_card" className="btn btn-secondary" onClick={() => addToCart(index)}>ADD TO CART</NavLink>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Shoping_cards;