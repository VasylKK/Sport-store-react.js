import React from "react";
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export var p='';

const Login = ({ onLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            toast.success('Ви успішно авторизувалися!');
            onLogin(email);
            p=password;
        } else {
            toast.error('Помилка авторизації. \n Будь ласка перевірте правильність вводу електронної адреси та паролю.');
        }

        setEmail('');
        setPassword('');
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-primary ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
            >
                <span className="fa fa-sign-in me-1"></span>Увійти
            </button>

            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Вхід
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Адреса електронної пошти
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <div id="emailHelp" className="form-text">
                            Ми ніколи нікому не передамо вашу електронну адресу.
                        </div>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Пароль
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        </div>
                        <div className="form-check">
                        </div>
                        <button
                        type="submit"
                        className="btn btn-outline-primary w-75 mx-5"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        >
                        Увійти
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
};

export default Login;
