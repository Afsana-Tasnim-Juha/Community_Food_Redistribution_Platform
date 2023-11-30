import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const FoodsDetails = () => {
    const details = useLoaderData();
    console.log(details);


    const { _id, foodName, foodImage, quantity, expiredDateTime, pickupLocation, DonatorEmail, donatorName, RequestDate, additionalNotes } = details;


    const { user } = useContext(AuthContext);



    const handleSubmit = event => {
        event.preventDefault();


        const request = {
            foodImage, _id, foodName, quantity, expiredDateTime, pickupLocation, DonatorEmail, donatorName, RequestDate, additionalNotes
        }
        console.log(request);

        fetch('http://localhost:5000/request', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    };

    const handleCloseModal = () => {

        console.log('Modal closed');
    };
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[400px]" src={foodImage} /></figure>
            <div className="ml-6 ">
                <h2 className="card-title text-3xl mb-2 ">{foodName}</h2>
                <p><span className="font-bold mb-2">Quantity:</span> {quantity}</p>
                <p><span className="font-bold mb-2">Expired Date:</span> {expiredDateTime}</p>



                <div className="card-actions mb-2">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-accent" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit}>

                                <label>
                                    <figure><img className="w-[200px] h-[200px]" src={foodImage} disabled alt="Movie" /></figure>
                                </label><br />
                                <label>
                                    <span className="text-teal-500 font-bold">Food Name: </span> <input type="text" value={foodName} disabled />
                                </label><br />
                                <label>
                                    <span className="text-teal-500 font-bold">Food Id:</span> <input type="text" value={_id} disabled />
                                </label><br />
                                <label>
                                    <span className="text-teal-500 font-bold">Food Donator email: </span><input type="email" value={DonatorEmail} disabled />
                                </label><br />
                                <label>
                                    <span className="text-teal-500 font-bold">Food Donator Name:</span> <input type="text" value={donatorName} disabled />
                                </label><br />

                                <label>
                                    <span className="text-teal-500 font-bold">User Email:</span> <input type="text" defaultValue={user?.email} disabled />
                                </label><br />

                                <label>
                                    <span className="text-teal-500 font-bold">Request Date: </span><input type="text" value={RequestDate} disabled />
                                </label><br />
                                <label>
                                    <span className="text-teal-500 font-bold">Pickup Location: </span><input type="text" value={pickupLocation} disabled />
                                </label><br />
                                <label>
                                    <span className="text-teal-500 font-bold">Expire Date:</span> <input type="text" value={expiredDateTime} disabled />
                                </label><br />
                                <label>
                                    Additional Notes: <textarea value={additionalNotes} />
                                </label><br />
                                <div className="form-control mt-6">
                                    <input className="btn btn-block" type="submit" value="Request" />
                                </div>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={handleCloseModal} className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default FoodsDetails;