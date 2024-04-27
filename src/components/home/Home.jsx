import { useLoaderData } from "react-router-dom";
import CoffeCard from "../coffecard/CoffeCard";
import { useState } from "react";

const Home = () => {
    const data=useLoaderData()

    const [change,setChange]=useState(data)
    console.log(data)
    return (
        <div>
        <div className="grid lg:grid-cols-1 gap-8 w-5/6 mx-auto">
        {change.map(info=><CoffeCard key={info._id} info={info} change={change} setChange={setChange}></CoffeCard>)}
        </div>
        </div>
    );
};

export default Home;