import { useState } from "react";
import { Link } from "react-router-dom";


const Title = () => (
    <a href="/">      
    <img  className="h-28 p-2"
    alt="logo" src="https://foodvilla.no/src/img/logo.png"></img>
    </a>
);
 
const Header = ()=>{
    const [IsLoggedin,setIsLoggedin] = useState(false)

    return(
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2"> <Link to="/">Home</Link> </li>
                    <li className="px-2"> <Link to="/about">About</Link> </li>
                    <li className="px-2"> <Link to="/contact">Contact</Link> </li>
                    <li className="px-2"> <Link to="/instamart">Instamart</Link> </li>
                    <li className="px-2">Cart</li>
                </ul>
            </div>
            <div className="flex justify-center items-center ">
                {
                    // you can write only JS Expressions not statements i.e a = 10 console,log(a)
                    // ek time pe ek button

                    IsLoggedin ? (<button className="mr-5 h-12 w-32 text-center bg-green-300  rounded-md" onClick={() => setIsLoggedin(false)}>Logout</button>) :
                    ( <button className="mr-5  h-12 w-32 text-center bg-green-300 rounded-md" onClick={() => setIsLoggedin(true)}>Login</button>)
                }
            </div>
            
            
        </div>
    );
};

export default Header;