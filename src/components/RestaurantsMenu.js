import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const param = useParams(); //aslo you can diractly write const {id} = useparams
    

    const[Restaurant,setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${param.id}`);

        const json = await data.json();
        console.log(json);
        setRestaurant(json.data.cards[2].card.card.info);
    }
    return (!Restaurant) ? <Shimmer /> : (

        <div className="menu">
            <h1>Restaurant id:{param.id}</h1>
            <h2> {Restaurant.name} </h2>
            <img id="immenu" src= {IMG_CDN_URL +Restaurant.cloudinaryImageId}></img>
            <h3> {Restaurant.city} </h3>
            <h3> {Restaurant.locality} </h3>
            <h3> {Restaurant.areaName} </h3>
            <h3> {Restaurant.avgRating} stars </h3>
            
        </div>
    );
};

export default RestaurantMenu;