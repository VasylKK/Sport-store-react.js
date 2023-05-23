import React from "react";
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

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

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        setEmail('');
        setPassword('');
        toast.success('Ви успішно зареєструвалися!');
    };

    return (
        <div>
        <button
            type="button"
            className="btn btn-outline-success ms-2"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
        >
            <span className="fa fa-user-plus me-1"></span> Зареєструватися
        </button>

        <div
            className="modal fade"
            id="signupModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Реєстрація
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
                    Зареєструватися
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;
