import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body  from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantsMenu";
import RestaurantMenuTest from "./components/test";
import Shimmer from "./components/Shimmer";
import Card from "./components/card";




/** swiggy app code practise
 * Header
 *   - logo
 *   - nav items (right side)
 *   - cart
 * Body
 *  - search bar
 *  - restaurantlist
 *      -restaurentcard
 *          -image      <a> in anchor tag if you put / in href it reload your page (href = "/")
 *          -name
 *          -rating
 *          -cuisines
 * Footer
 *  - links
 *  - copyright
 *  
 */



// we can also use javascript object to make it dynamic
const biryani = {
    name: "Biryani",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
    cusines: ["North indian","Tandoori"],
    rating: "4.2",
};

// it is lazy import  //on demand loading -> upon render -> react will suspend to handlie it -> suspense
    const Instamart = lazy(() => import("./components/Instamart"));



//props - properties


// <> </> these are short hand of react fragments they came because you should only have one parent
// aslo you can write in div but it makes our code ugly

const Applayout = () => {
    return (
        <>
        {/* <Header />
        <Body />
        <Footer /> */}
        <Header />
        {/* outlet -> means header and footer are constant file only body is changing */}
        <Outlet/>
        <Footer />
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        errorElement: <Error/>,      // it is a property for error
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu/>
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback = {<Shimmer/>}>
                    <Instamart/>
                    </Suspense>
                )
            },
            {
                path: "/card",
                element: (
                    <div className="m-5 bg-blue-300 text-white w-26 h-11">
                        <Card {...biryani}/>
                    </div>
                )
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<Applayout />);

root.render(<RouterProvider router = {appRouter}/>)



