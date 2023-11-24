import { useContext } from 'react';
import login from '../../assets/Resources/login/login.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Registration = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12  w-1/2">

                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Registration</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-accent" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='mt-2 text-center'>Already Have An Account? <Link to="/Login"><span className='text-teal-500 font-bold'>Login</span> here</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;

