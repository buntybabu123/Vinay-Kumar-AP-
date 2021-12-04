import React from "react";

const Github = ({user}) => {
    return (
        <>
            <h2 className="text-center">List of GitHub Users</h2>
            <div className="container-fluid mt-5 ">
                <div className="row text-center">
                    {
                        user.map((curElem) => {
                            return (
                                <div className="col-10 col-md-3 mt-5" key={curElem.id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={curElem.avatar_url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{curElem.login}</h5>
                                            <p className="card-text">{curElem.url}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Github;