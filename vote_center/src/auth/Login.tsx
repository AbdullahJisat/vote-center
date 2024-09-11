import React, { useState } from 'react';
// import PropTypes from "prop-types";
import ApiUrl from "../config/ApiUrl.tsx";
import {useNavigate} from "react-router-dom";

interface LoginForm {
    email: string;
    password: string;
}

interface LoginProps {
    setToken: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({setToken}) => {
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginForm(loginForm => ({
            ...loginForm,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await ApiUrl.post('login', {
                email: loginForm.email,
                password: loginForm.password
            });
            const token = response.data.token;
            setToken(token);
            navigate('/')
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>Admin</b></a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="email" name="email" className="form-control" placeholder="Email"
                                       value={loginForm.email}
                                       onChange={handleFormInput}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password"
                                       value={loginForm.password}
                                       onChange={handleFormInput}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember"/>
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </div>
                        </form>

                        <p className="mb-1">
                            <a href="#">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="#" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

export default Login;
