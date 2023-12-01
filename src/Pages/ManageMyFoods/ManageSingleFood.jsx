import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ManageSingleFood = () => {

    const updateFood = useLoaderData();
    const { _id, name, photo, quantity, pickup, expired, status, dName, dEmail, dPhoto } = updateFood;

    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const pickup = form.pickup.value;
        const expired = form.expired.value;
        const status = form.status.value;
        const dName = form.dName.value;
        const dEmail = form.dEmail.value;
        const dPhoto = form.dPhoto.value;
        const photo = form.photo.value;

        const updatedFood = { name, quantity, pickup, expired, status, dName, dEmail, dPhoto, photo }

        console.log(updatedFood);


        //Send data to the server

        fetch(`http://localhost:5000/food/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFood),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added food',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    return (
        <div className="bg-teal-50 p-24">
            <h2 className="text-[#374151] text-3xl font-extrabold">Update food item</h2>


            <form onSubmit={handleUpdateFood} className="mt-4 ">

                <div className=" md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold ">
                            <span className="label-text ">Food Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Food quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="pickup" defaultValue={pickup} placeholder="Pickup Location" className=" input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Expired Date</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="expired" defaultValue={expired} placeholder="Expired Date" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="flex gap-4">

                    <div className="form-control md:w-1/4">
                        <label className="label font-bold">
                            <span className="label-text">Food Status</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="status" value="Available" placeholder="Food Status" defaultValue={status} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/4">
                        <label className="label font-bold">
                            <span className="label-text">Donator Name </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="dName" placeholder="Donator Name " defaultValue={dName} className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/4 ">
                        <label className="label font-bold">
                            <span className="label-text">Donator Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="dEmail" placeholder="Donator Email" defaultValue={dEmail} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ">
                        <label className="label font-bold">
                            <span className="label-text">Donator Photo</span>
                        </label>
                        <label className="input-group">

                            <input type="photo" name="dPhoto" placeholder="Donator Photo url" defaultValue={dPhoto} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full ">
                    <label className="label font-bold">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" placeholder="Photo url" defaultValue={photo} className="input input-bordered w-full" />
                    </label>
                </div>


                <input type="submit" value="Add Food" className="btn btn-block mt-4 bg-teal-500" />
            </form>
        </div>
    );
};

export default ManageSingleFood;