import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Usercard from "../percard/Usercard";

const UserData = () => {
    const user=useLoaderData()
    console.log(user)
    const [data,setUData]=useState(user)
     


    return (
        
<div>
    {
        data.map(info=>
            <Usercard key={info._id} info={info} setUData={setUData} data={data} ></Usercard>
        
        )
    }
</div>

    );
};

export default UserData;