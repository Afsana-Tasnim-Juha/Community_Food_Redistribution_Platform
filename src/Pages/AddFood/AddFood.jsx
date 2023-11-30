

const AddFood = () => {
    const handleAddFood = event => {
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

        const newFood = { name, quantity, pickup, expired, status, dName, dEmail, dPhoto, photo }

        console.log(newFood);


        //Send data to the server

        fetch('http://localhost:5000/food', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFood),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }



    return (
        <div className="bg-teal-100 p-24">
            <h2 className="text-[#374151] text-3xl font-extrabold">Add food item</h2>


            <form onSubmit={handleAddFood} className="mt-4">
                {/*name and quantity*/}
                <div className=" md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold ">
                            <span className="label-text ">Food Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Food quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*Supplier and Taste*/}
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="pickup" placeholder="Pickup Location" className=" input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Expired Date</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="expired" placeholder="Expired Date" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/*Category and Details*/}
                <div className="flex gap-4">

                    <div className="form-control md:w-1/4">
                        <label className="label font-bold">
                            <span className="label-text">Food Status</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="status" value="Available" placeholder="Food Status" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/4">
                        <label className="label font-bold">
                            <span className="label-text">Donator Name </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="dName" placeholder="Donator Name " className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/4 ">
                        <label className="label font-bold">
                            <span className="label-text">Donator Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="dEmail" placeholder="Donator Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ">
                        <label className="label font-bold">
                            <span className="label-text">Donator Photo</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="dPhoto" placeholder="Donator Photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full ">
                    <label className="label font-bold">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" />
                    </label>
                </div>


                <input type="submit" value="Add Food" className="btn btn-block mt-4 bg-teal-500" />
            </form>
        </div>
    );
};

export default AddFood;