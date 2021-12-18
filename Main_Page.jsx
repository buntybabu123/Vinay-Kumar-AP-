import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Shoping_cards from "./Shoping_Cards";
import {data} from "./data";
import Header from "./Header";
import Single_Card from "./Single_Card";


const Main_Page = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Shoping_cards data={data}/>}/>
                <Route path="/shoping_cards" element={<Shoping_cards data={data}/>}/>
                <Route path="/single_card" element={<Single_Card/>}/>
                <Route path="/shoping_cards/single_card" element={<Single_Card/>}/>
            </Routes>
        </Router>
            // <Header />
            // <Shoping_cards data={data} />
        
    )
}

export default Main_Page;