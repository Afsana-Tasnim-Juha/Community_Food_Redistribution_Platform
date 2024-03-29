import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then((result) => {
                const user = result.user;
                console.log(user);

            })
            .catch((error) => {
                console.log(error);
            });
    }
    const Links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AvailableFoods">Available Foods</Link></li>
        <li><Link to="/AddFood">Add Food</Link></li>
        <li><Link to="/ManageMyFoods">Manage My Foods</Link></li>
        <li><Link to="/MyFoodRequest">My Food Request</Link></li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <img className='w-[60px] h-[60px] rounded-full' src={logo} alt="" />
                <p className="font-bold text-xl text-teal-500">HarvestHub</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-accent">Sign Out</button>
                        :
                        <Link to="/Login">
                            <button className="btn btn-accent">Log In</button>
                        </Link>
                }
            </div>

        </div>
    );
};

export default NavBar;