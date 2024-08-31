
import { useState,useEffect} from "react";
import {restaurantlist} from "../config";
import Restaurentcard from "./Restaurentcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";


function filterdata(searchinput,restaurants){

    const filtdata = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchinput.toLowerCase()));
    return filtdata;
}




const Body = () => {
    //const searchtxt = "Raajbagh Restaurant";

    //searchtxt is a local state variable
    //creating a  toggle button
    // const [searchclick,setSearchclick] = useState("false");
    const [Allrestaurants,setAllrestaurants] = useState([]);

    const [searchinput , setSearchinput] = useState("");

    const[Filteredrestaurants,setFilteredrestaurants] = useState([]);

    // USE EFFECT(callbackfunc,dependancyarray) -> HOOKS(2)
    // empty dependency array -> once after render
    // dep arr[searchinput] -> once after initial render and + re-render when searchinput changes
    
    useEffect(() => {
        //API CALL 1) using fetch()
        getrestraunts();
    },[]);

    async function getrestraunts(){
      const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
       //console.log(json);
      //we have to use  optional chaining
      setAllrestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredrestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }


    const isOnline = useOnline();

    if(!isOnline){
        return <h1>You are offline check your connection</h1>
    }

    //conditonal rendereing
    //if rest is empty -> shimmer else actual data

    // if(Filteredrestaurants.length === 0){
    //     return <h1>No match for your filter</h1>;
    // }

    return (Allrestaurants?.length === 0) ? <Shimmer/> : (
        <>
        <div className="search-cont p-5 bg-pink-50 my-5">
            <input type="text"
            className=" focus:bg-green-100 p-2 m-2 rounded-md" 
            placeholder="search" 
            value={searchinput}
            onChange={(e) => {
                setSearchinput(e.target.value);
            }}
            />
            {/* <h1>{searchclick}</h1> */}
            <button className="seach-btn p-2 m-2 bg-purple-900 hover:bg-gray-700 text-white rounded-lg" onClick={ () => {
                //creating a toggle btn
                // if(searchclick === "true"){
                //     setSearchclick("false");
                // }else{
                //     setSearchclick("true");
                // }

                //need to filter the data
                const data = filterdata(searchinput,Allrestaurants);
                //update the filter data
                setFilteredrestaurants(data);

            }}
            >search</button>
        </div>
        <div className="reataurant-card flex flex-wrap pl-3 space-x-1">
        {/* <Restaurentcard restaurant = {restaurantlist[0]}/>
        <Restaurentcard restaurant = {restaurantlist[1]}/>
        <Restaurentcard restaurant = {restaurantlist[2]}/>
        <Restaurentcard restaurant = {restaurantlist[3]}/> */}

        {/* WE CAN USE MAP(GOOD PRACTISE TO CALL IT BAAR BAAR)
        no key (not acceptable) << index key (last option) <<< unique key good practise */}

        {
            // restaurantlist.map((restaurant) => {
            //     return <Restaurentcard  {...restaurant.info} key ={restaurant.info.id} />
            // })

            //this will rerender 
            Filteredrestaurants.map((restaurant) => {
                // return <Restaurentcard  {...restaurant.info} key ={restaurant.info.id} />
                return (
                    <Link to={"restaurants/"+restaurant.info.id} key ={restaurant.info.id}
                    ><Restaurentcard  {...restaurant.info}  /> </Link>
                );
            })
        }
                
        </div>
        </>
    );
};




export default Body;