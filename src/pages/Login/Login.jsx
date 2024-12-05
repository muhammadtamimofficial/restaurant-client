// import { Input } from 'postcss';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha }
    from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import loginImg from '../../../public/assets/login.avif'
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [disable, setDisable] = useState(true);
    const captchaRef = useRef(null); // Access the input value
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const HandleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value; // Access the input value
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
    }

    const HandleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Login completed",
                    // text: "You clicked the button!",
                    icon: "success"
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid email or password",
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <meta name="description" content="Dynamic meta description for this page" />
            </Helmet>
            <div className="bg-base-200 min-h-screen flex items-center justify-center">
                <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
                    <figure className="lg:w-1/2">
                        <img src={'loginImg'} alt="Random image" className="object-cover w-full h-full" />
                    </figure>
                    <div className="card-body lg:w-1/2">
                        <h2 className="card-title text-2xl font-bold mb-6">Login</h2>
                        <form onSubmit={HandleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="email" name="email" className="grow" placeholder="Email address" />
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                                    <input type="password" name="password" className="grow" placeholder="Enter password" />
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label flex">
                                    <LoadCanvasTemplate />
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-3">verify captcha</span>
                                        <input type="checkbox" onClickCapture={HandleCaptcha} className="checkbox checkbox-primary" />
                                        {/* defaultChecked */}
                                    </label>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="captcha"
                                        ref={captchaRef}
                                        name="captcha" className="grow" placeholder="Type the text captcha above" />
                                    {/* <button onClickCapture={HandleCaptcha} className="btn btn-xs">verify me</button> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type='submit' value={'Login'} />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <p>Don't have an account?</p>
                            <Link to="/signup" className="link link-primary">Sign up now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;