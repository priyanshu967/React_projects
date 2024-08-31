const Shimmer = () => {
    return (
        <div className="reataurant-card p-4  flex justify-between">
        {Array(10).fill("").map((e,index) => <div key={index} className="shimmer-card h-32 w-full mb-4 rounded-lg bg-gray-300"></div>)}
        </div>
    );

    

};

export default Shimmer;