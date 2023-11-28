import { useLocation } from "react-router-dom";



const AvailableFoods = () => {
    const location = useLocation();
    console.log(location.state);

    const { featuredFoods } = location.state || {};


    return (
        <div><h2>AvailableFoods</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    featuredFoods && featuredFoods.length > 0 ? (
                        featuredFoods.map((food, index) => (
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
                                        <button className="btn btn-accent w-full">View Detail</button>
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