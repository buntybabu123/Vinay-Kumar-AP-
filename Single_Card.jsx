import React from "react";

const Single_Card = () => {
    return (
        <>
            <div className="container">
                <div className="card single_card">
                    <img src="https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg" alt="Images not found" />
                    <div className="ms-5 mx-auto mt-5">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">`(2 customer reviews)`</p>
                        <p className="card-text">Rs 249</p>
                        <p className="card-text">Size: null</p>
                        <span className="quantity">1</span><a href="#" className="btn btn-dark ms-2">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single_Card;