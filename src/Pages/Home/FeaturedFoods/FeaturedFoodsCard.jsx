import { Link } from "react-router-dom";


const FeaturedFoodsCard = ({ featuredFood }) => {
    const { _id, foodName, foodImage, viewDetailButton, additionalNotes, donatorName, donatorImage, quantity, pickupLocation, expiredDateTime } = featuredFood;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={foodImage} alt="Shoes" className="rounded-xl w-60 h-60 " />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{foodName}</h2>
                <div className="flex gap-2">
                    <img className="rounded-full w-10 h-10" src={donatorImage} alt="" />
                    <p className="mt-2 font-bold">{donatorName}</p>

                </div>
                <p><span className="font-bold">Quantity:</span> {quantity}</p>
                <p><span className="font-bold" >Pickup Location:</span> {pickupLocation}</p>
                <p><span className="font-bold">Additional Notes:</span> {additionalNotes}</p>
                <p><span className="font-bold">Expired Date:</span> {expiredDateTime}</p>


                <div className="card-actions">
                    <button className="btn btn-accent w-full">View Detail</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodsCard;