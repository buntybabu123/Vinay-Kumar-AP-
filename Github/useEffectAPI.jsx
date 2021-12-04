import React, { useEffect, useState } from "react";
import Lodding from "./Lodding";
import Github from "./Github_users";

const UseEffectAPI = () => {
    const [user, setUser] = useState([]);
    const [lodding, setLodding] = useState(true);

    // getting the data from API.
    const getUsers = async () => {
        try{
            const response = await fetch('https://api.github.com/users');
            console.log(response);
            setLodding(false);
            setUser(await response.json());
        }
        catch (error){
            setLodding(false);
            console.log("My Error is " + error);
        }
    }
    // console.log(lodding);
   

    useEffect(() => {
        getUsers();
    }, [])

    if(lodding){
        return (
            <Lodding />
        )
    }

    return (
           <Github user={user} />
    )
}

export default UseEffectAPI;