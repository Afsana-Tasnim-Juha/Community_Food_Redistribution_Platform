import login from '../../assets/Resources/login/login.jpg';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
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
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
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
                            <div className="form-control mt-6">

                                <input className="btn btn-accent" type="submit" value="Login" />
                            </div>
                        </form>
                        <div >
                            <h5 className='text-center font-semibold'>Or Login With</h5>
                            <div className='flex gap-4 justify-center mt-2'>
                                <button className='btn'> <FcGoogle /></button>
                                <button className='btn'> <FaGithub /></button>
                            </div>
                            <p className='mt-2 text-center'>New user? <Link to="/Registration"><span className='text-teal-500 font-bold'>Register</span> here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;