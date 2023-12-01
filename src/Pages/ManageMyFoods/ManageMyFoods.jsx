import { FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import ManageSingleFood from './ManageSingleFood';



const ManageMyFoods = () => {
    const manageFoods = useLoaderData();
    const [manageFood, setManageFood] = useState(manageFoods);

    const handleManageFood = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/food/${_id}`, {
                    method: "DELETE",
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                            //remove the food from the UI
                            const remaining = manageFood.filter(fo => fo._id !== _id);
                            setManageFood(remaining);

                        }
                    })

            }
        })

    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table bg-teal-50">
                    {/* head */}
                    <thead>
                        <tr className="bg-teal-500">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Food Name</th>
                            <th>Food Quantity</th>
                            <th>Pickup Location</th>
                            <th>Expired Date</th>
                            <th>Donator Name</th>
                            <th>Donator email</th>
                            <th>Food Status</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>




                        {
                            manageFood.map(food => <tr key={food._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    {food.name}
                                </td>
                                <td>
                                    {food.quantity}
                                </td>
                                <td>
                                    {food.pickup}
                                </td>
                                <td>
                                    {food.expired}
                                </td>


                                <td>
                                    <div className="flex gap-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={food.dPhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className="mt-4 ">
                                            {food.dName}
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    {food.dEmail}
                                </td>
                                <td>
                                    {food.status}
                                </td>


                                <th>

                                    <div className="flex gap-1 ">

                                        <Link to={`/ManageSingleFood/${food._id}`}>
                                            <button ><FaEdit className="w-[20px] h-[20px]"></FaEdit></button>
                                        </Link>
                                        <button onClick={() => handleManageFood(food._id)}><MdDelete className="w-[20px] h-[20px]" /></button>
                                    </div>

                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageMyFoods;