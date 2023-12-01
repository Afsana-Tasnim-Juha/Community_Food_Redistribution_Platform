import { Link } from "react-router-dom";


const AddFoodCard = ({ addFood }) => {
    const { _id, name, photo, quantity, pickup, expired, status, dName, dEmail, dPhoto } = addFood;
    return (
        <div className="card card-side bg-base-50 shadow-xl">
            <figure><img className="w-[200px] h-[200px] rounded-xl" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="grid grid-cols-3">
                    <p><span className="font-bold">Food Quantity:</span> {quantity}</p>
                    <p><span className="font-bold">Pickup Location:</span>{pickup}</p>
                    <p><span className="font-bold">Expired Date:</span>{expired}</p>
                    <p><span className="font-bold">Food Status:</span>{status}</p>
                    <div className="flex">
                        <img className="w-[80px] h-[80px] rounded-full" src={dPhoto} alt="Movie" />
                        <p className="mt-6"><span className="font-bold">Donator Name:</span>{dName}</p>

                    </div>
                    <p><span className="font-bold">Donator Email:</span>{dEmail}</p>



                </div>
                <div className="card-actions justify-end">
                    <Link to="/">
                        <button className="btn btn-primary">Back To The Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddFoodCard;