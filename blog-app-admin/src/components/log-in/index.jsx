import React, { useState } from 'react'

import { Formik } from 'formik';
import { API_ENDPOINTS } from '../../constant/api';
import { toast } from 'react-toastify';
import { logInValidation } from '../../constant/validation';
import fetchApi from '../utils/helper';


const LogIn = () => {
    const [loading, setLoading] = useState(true)


    const handleSubmit = async (values) => {
        setLoading(false);
        try {
            const response = await fetchApi({ url: API_ENDPOINTS.LOGIN, method: 'POST', data: values });
            if (response.status === 200) {
                localStorage.setItem("auth", response.token);
                localStorage.setItem("userData", JSON.stringify(response.data));
                // setUserData(response.data)
                // navigate(response.data.user_role === "admin" ? "/dashboard" : "/dashboard");
                toast.success("Log In Successfully");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("Error To Fetch API");
        } finally {
            setLoading(true);
        }
    };

    return (
        <>
            <div className="login-box">
                <Formik
                    onSubmit={(values) => loading && handleSubmit(values)}
                    initialValues={{ user_email: "", user_pass: "" }}
                    // validationSchema={logInValidation}
                >
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <div className="user-box">
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.user_email}
                                    id="user_email"
                                    name="user_email"
                                    type="text"
                                    required="" />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.user_pass}
                                    id="user_pass"
                                    name="user_pass"
                                    type="password"
                                    required="" />
                                <label>Password</label>
                            </div>
                            <div className='text-center'>
                                <button type='submit' >
                                    SEND
                                    <span></span>
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>

            {/* <div classname="w-screen h-screen flex justify-center items-center">
                <div className="main">
                    <h1>Login Page</h1>
                    <div className="form">
                        <input type="text" required="" />
                        <label>
                            <span style={{ transitionDelay: "0ms" }}>E</span>
                            <span style={{ transitionDelay: "50ms" }}>m</span>
                            <span style={{ transitionDelay: "100ms" }}>a</span>
                            <span style={{ transitionDelay: "150ms" }}>i</span>
                            <span style={{ transitionDelay: "200ms" }}>l</span>
                        </label>
                    </div>
                    <div className="form">
                        <input type="password" required="" />
                        <label>
                            <span style={{ transitionDelay: "0ms" }}>P</span>
                            <span style={{ transitionDelay: "50ms" }}>a</span>
                            <span style={{ transitionDelay: "100ms" }}>s</span>
                            <span style={{ transitionDelay: "150ms" }}>s</span>
                            <span style={{ transitionDelay: "200ms" }}>w</span>
                            <span style={{ transitionDelay: "250ms" }}>o</span>
                            <span style={{ transitionDelay: "300ms" }}>r</span>
                            <span style={{ transitionDelay: "350ms" }}>d</span>
                        </label>
                    </div>
                    <button className="btn">Login</button>
                    <p>
                        Don't have an Account? <a href="#">Register</a>
                    </p>
                </div>
            </div> */}

        </>
    )
}

export default LogIn