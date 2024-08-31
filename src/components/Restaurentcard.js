import { IMG_CDN_URL } from "../config";

const Restaurentcard = ({name,cuisines,cloudinaryImageId,avgRating}) => {  
    // also if ({restaurant}) then we do not have to use props.restaurant.info instead directly restaurant.info

    // const {name,cuisines,cloudinaryImageId,avgRating} = restaurant.info  -> also we can distructure direct in parameter
    return(
        // <div className="cardd w-56 h-90 p-2 m-2 shadow-lg bg-orange-200 ">
        <div className="cardd w-56 h-72 p-2 m-2 shadow-lg bg-orange-200 flex flex-col justify-between">
        
{/*              
            <img alt="biryani" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"></img>
            <h2>Biryani</h2>
            <h3>North indian,Tandoori</h3>
            <h4>4.2 stars</h4> */}

            {/* <img src={biryani.image}></img>      these code using biryani as dynamic object
            <h2>{biryani.name}</h2>
            <h4>{biryani.cusines.join(",")} </h4>  join is used to join teo array chidren using seperator ,
            <h3>{biryani.rating} stars</h3> */}

            {/* ? optional chainig if data present in api or not */}

            {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                restaurantlist[0].info?.cloudinaryImageId
            }></img>
            <h2>{restaurantlist[0].info?.name}</h2>
            <h4>{restaurantlist[0].info?.cuisines.join(",")} </h4> 
            <h3>{restaurantlist[0].info?.avgRatingString} stars</h3> */}

                {/* USING PROPS */}
            {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                props.restaurant.info?.cloudinaryImageId
            }></img>
            <h2>{props.restaurant.info?.name}</h2>
            <h4>{props.restaurant.info?.cuisines.join(",")} </h4> 
            <h3>{props.restaurant.info?.avgRatingString} stars</h3> */}


            {/* <img className="imgg w-full h-56" src={IMG_CDN_URL +
                cloudinaryImageId
            }></img>
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3 className="break-words">{cuisines.join(",")} </h3> 
            <h3>{avgRating} stars</h3> */}

        <img className="imgg w-full h-32 object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <h2 className="font-bold text-2xl mt-2">{name}</h2>
        <h3 className="break-words">{cuisines.join(", ")}</h3>
        <h3 >Rating: <span className="text-red-600">{avgRating} </span>stars</h3>
        
            

        </div>
    );
}

export default Restaurentcard;