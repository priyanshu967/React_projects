import { useParams } from "react-router-dom";

const RestaurantMenuTest = () => {
    const param = useParams(); //aslo you can diractly write const {id} = useparams
    
    return(
        <div>
            <h1>Restaurant id : {param.id} </h1>
        </div>
    );
     

  
};

export default RestaurantMenuTest;