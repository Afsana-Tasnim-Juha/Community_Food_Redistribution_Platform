
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";



const AvailableFoods = () => {
    const location = useLocation();
    console.log(location.state);
    const { featuredFoods } = location.state || {};

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    //handle search button

    const handleSearch = () => {
        const results = featuredFoods.filter(food =>
            food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };


    // handle sorting button
    const handleSort = () => {
        const sortedResults = [...featuredFoods].sort((a, b) => {
            const dateA = new Date(a.expiredDateTime).getTime();
            const dateB = new Date(b.expiredDateTime).getTime();

            if (sortOrder === "asc") {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setSearchResults(sortedResults);
    };


    return (
        <div>
            <div className=" text-right p-4 m-4 ">
                <input type="text"
                    id="Search-field"
                    placeholder="Search here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setSearchTerm(e.target.value)} />

                <button
                    onClick={handleSearch} className="btn btn-accent ">Search
                </button>

                <button onClick={handleSort} className="btn btn-accent ml-2">
                    Sort by Expire Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {searchTerm ?
                    searchResults && searchResults.length > 0 ? (
                        searchResults.map((food, index) => (
                            <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={food.foodImage} alt="Shoes" className="rounded-xl w-60 h-60 " />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{food.foodName}</h2>
                                    <div className="flex gap-2">
                                        <img className="rounded-full w-10 h-10" src={food.donatorImage} alt="" />
                                        <p className="mt-2 font-bold">{food.donatorName}</p>

                                    </div>
                                    <p><span className="font-bold">Quantity:</span> {food.quantity}</p>
                                    <p><span className="font-bold" >Pickup Location:</span> {food.pickupLocation}</p>
                                    <p><span className="font-bold">Additional Notes:</span> {food.additionalNotes}</p>
                                    <p><span className="font-bold">Expired Date:</span> {food.expiredDateTime}</p>


                                    <div className="card-actions">
                                        <Link to="/FoodsDetails" className="btn btn-accent w-full">View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No featured foods available.</p>
                    )
                    : featuredFoods && featuredFoods.length > 0 ? (
                        featuredFoods.map((food, index) => (
                            <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                {/* Your existing code for rendering food items */}
                                <figure className="px-10 pt-10">
                                    <img src={food.foodImage} alt="Shoes" className="rounded-xl w-60 h-60 " />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{food.foodName}</h2>
                                    <div className="flex gap-2">
                                        <img className="rounded-full w-10 h-10" src={food.donatorImage} alt="" />
                                        <p className="mt-2 font-bold">{food.donatorName}</p>

                                    </div>
                                    <p><span className="font-bold">Quantity:</span> {food.quantity}</p>
                                    <p><span className="font-bold" >Pickup Location:</span> {food.pickupLocation}</p>
                                    <p><span className="font-bold">Additional Notes:</span> {food.additionalNotes}</p>
                                    <p><span className="font-bold">Expired Date:</span> {food.expiredDateTime}</p>


                                    <div className="card-actions">
                                        <Link to="/FoodsDetails" className="btn btn-accent w-full">View Detail</Link>
                                    </div>
                                </div>


                            </div>
                        ))
                    ) : (
                        <p>No featured foods available.</p>
                    )
                }
            </div>

        </div>
    );
};

export default AvailableFoods;


