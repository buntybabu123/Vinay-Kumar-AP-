import React, { useState } from "react";

const API_with_imput_field = () => {

    const [userName, setUserName] = useState("");
    const [pk, setPk] = useState("");
    const [my, setMy] = useState("");


    const clickMe = async () => {
        try {
            const response = await fetch('https://api.nationalize.io/?name=izhar');
            const filterResponse = (await response.json());

            const { name, country } = filterResponse;

            const [country_id, probability] = country;

            if (name === userName) {
                setPk(country_id.country_id);
                setMy(probability.country_id);
                setUserName("");
            }
            else{
                alert("Invailid User Name Please Enter Right User Name");
                setUserName("");
            }
        } catch (error) {
            console.log(error);
        }
        setUserName("");
    }

    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center">API with input field </h1>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input type="text" className="form-control" placeholder="Enter User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>

                <button className="btn btn-outline-primary" onClick={clickMe}>Login</button>
            </div>

            <div className="container">
                            <div className="card-body">
                                <h3 className="text-center">{pk}</h3>
                                <h3 className="text-center">{my}</h3>
                            </div>
                    </div>
        </>
    )
}

export default API_with_imput_field;