import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Login.css';

const Login = () => {
    const [login, setLogin] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        mode: "all",
        reValidateMode: 'onChange'
    });
    const password = useRef();
    password.current = watch('password');

    const onSubmit = data => {

    }

    return (
        <>
           {
                <Header />
            }

            <div className="login-signup">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tab-menu">
                                <div className="nav nav-tabs">
                                    <p onClick={() => { reset(); setLogin(false) }} className={"nav-item nav-link " + (!login ? "active" : "")}>
                                        Register
                                    </p>
                                    <p onClick={() => { reset(); setLogin(true) }} className={"nav-item nav-link " + (login ? "active" : "")}>
                                        Login
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="login-area signup-area bg-white">
                                    <div className="header-area mb-4 text-center">
                                        <h4 className="title fw-bolder text-uppercase">{!login ? "Signup Now" : "Login Now"}</h4>
                                    </div>
                                    <div className="login-form signup-form">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            {!login && <div className="form-group  mb-3">
                                                <input type="name" {...register("name", { required: true })} className="form-control" name="name" placeholder="Full Name" />
                                                {errors.name && <span className="text-danger">This field is required</span>}
                                            </div>}
                                            <div className="form-group  mb-3">
                                                <input type="email" {...register("email", { required: true })} className="form-control" name="email" placeholder="Email Address" autoComplete="off" />
                                                {errors.email && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group  mb-3">
                                                <input type="password" {...register("password", { required: true })} className="form-control" name="password" placeholder="Password" />
                                                {errors.password && <span className="text-danger">This field is required</span>}
                                            </div>
                                            {!login && <div className="form-group  mb-3">
                                                <input type="password" {...register("c_password", { required: true, validate: (value) => value === password.current })} name="c_password" placeholder="Confirm Password" className="form-control" />
                                                {errors.c_password && errors.c_password.type === "required" && <span className="text-danger">This field is required</span>}
                                                {errors.c_password && errors.c_password.type === "validate" && <span className="text-danger">Password does not match</span>}
                                            </div>}
                                            <div className="form-group mb-3 pt-3">
                                                <button type="submit" className="submit-btn text-center text-white fw-bolder text-uppercase" >{!login ? "Register" : "Login"}</button>
                                            </div>
                                            {login && <div className="mt-4 pt-2 social-area text-center">
                                                <h5 className="title position-relative">OR</h5>
                                                <p className="text">Sign In with social media</p>
                                                <ul className="social-link list-inline mb-0">
                                                    <li>
                                                        <span className="google">
                                                            <FaGooglePlusG />
                                                        </span>
                                                    </li>
                                                    <li className="ms-3">
                                                        <span className="facebook">
                                                            <FaFacebookF />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            {
                <Footer />
            }
        </>
    );
};

export default Login;