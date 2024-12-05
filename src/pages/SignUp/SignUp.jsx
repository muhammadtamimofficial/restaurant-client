import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import signUpImg from '../../../../public/assets/signUp.avif'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        // console.log(data, data.email, data.password);
        // console.log(data.name, data.photo_URL)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo_URL)
                    .then((result => {
                        Swal.fire("successfully created this account.");
                        reset();
                    }))
                navigate(from, { replace: true });
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    Swal.fire({
                        title: "Sorry",
                        text: "Already , Have a account in this mail.",
                        icon: "question"
                    });
                }
                else {
                    console.log(error);

                    Swal.fire({
                        icon: "error",
                        title: `Oops...${error}`,
                        text: "Something went wrong!",
                        footer: 'Try again later.'
                    });

                    // console.log(data, data.email, data.password);
                    // console.log(data.name, data.photo_URL)
                }


            })
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up</title>
            </Helmet>
            <div className="bg-base-200 min-h-screen flex items-center justify-center">
                <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
                    <figure className="lg:w-1/2">
                        <img src={'signUpImg'} alt="Random image" className="object-cover w-full h-full" />
                    </figure>
                    <div className="card-body lg:w-1/2">
                        <h2 className="card-title text-2xl font-bold mb-6">SignUp</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <img src="https://www.w3.org/assets/website-2021/svg/avatar.svg" className="w-4 h-4 " ></img>
                                    <input type="name" name='name' {...register("name", { required: true })} className="grow" placeholder="Name" />
                                </label>
                                {errors.name && <span className='mt-2 text-red-500'>Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" className="w-4 h-4 " ></img>
                                    <input type="photo_URL" name='photo_URL' {...register("photo_URL", { required: true })} className="grow" placeholder="photo URL" />
                                </label>
                                {errors.photo_URL && <span className='mt-2 text-red-500'> photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="email" name='email' {...register("email", { required: true })} className="grow" placeholder="email@example.com" />
                                </label>
                                {errors.email && <span className='mt-2 text-red-500'>E-mail field is required</span>}

                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                                    <input type="password" name='password' {...register("password", { required: true, required: true, minLength: 6, maxLength: 20 })} className="grow" placeholder="Enter password" />
                                </label>
                                {errors.password && <span className='mt-2 text-red-500'>Password is required minimum 6 to max 20 character.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign up" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <p>Already have an account?</p>
                            <Link to="/login" className="link link-primary">Login now</Link>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default SignUp;