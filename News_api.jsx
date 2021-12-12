import React, { useEffect, useState } from "react";
import Axios from "axios";

const News_api = () => {
    const [data, setData] = useState([]);

    const showNews =async () => {
        const res = await Axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e20c3e72246346449c3f74a2600b73d3');
        const { data } = res;
        const { articles } = data;
        // console.log(articles);
        setData(articles);
    }

    const hideNews = () => {
        setData([]);
    }

    return (
        <>

            <div className="container">
            <button type="button" className="btn btn-outline-primary mt-5" onClick={showNews} >See News</button>
            <button type="button" className="btn btn-outline-danger mt-5 ms-4" onClick={hideNews}>Hide News</button>
                {
                    data.map((curElem, index) => {
                        const {title, description, url, urlToImage} = curElem;
                        return <div className="card mb-3 mt-5">
                            <img src={urlToImage} className="card-img-top" alt="image not found" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                
                            </div>
                        </div>

                    })
                }

            </div>

        </>
    )
}

export default News_api;

// https://newsapi.org/account