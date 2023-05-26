import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export var status = 'Не оплачено';

const Checkout = () => {
    const state = useSelector((state) => state.addItem);
    const history = useHistory();
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        number: '',
        ccName: '',
        ccNumber: '',
        ccExpiration: '',
        ccCvv: '',
    });

    const handleClick = () => {
        status = 'Оплачено';
        history.push('/PersonalAccount');
    };

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
            <h6 className="my-0">{item.title}</h6>
            </div>
            <span className="text-muted">₴{item.price}</span>
        </li>
        );
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const isFormValid =
        formValues.firstName &&
        formValues.lastName &&
        formValues.email &&
        formValues.address &&
        formValues.ccName &&
        formValues.ccNumber &&
        formValues.ccExpiration &&
        formValues.ccCvv;

    return (
        <>
        <div className="container my-5">
            <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Ваше замовлення</span>
                <span className="badge bg-primary rounded-pill">
                    {state.length}
                </span>
                </h4>
                <ul className="list-group mb-3">
                {state.map(itemList)}

                <li className="list-group-item d-flex justify-content-between">
                    <span>Всього (UAH)</span>
                    <strong>₴{total}</strong>
                </li>
                </ul>
            </div>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3 mt-3">Платіжна інформація</h4>
                <form className="needs-validation" novalidate="">
                <div className="row g-3">
                    <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                        Імя
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder=""
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        required=""
                    />
                    <div className="invalid-feedback">
                        Потрібно вказати дійсне ім’я.
                    </div>
                    </div>

                    <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                        Фамілія
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder=""
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        required=""
                    />
                    <div className="invalid-feedback">
                        Потрібно вказати дійсну фамілію.
                    </div>
                    </div>

                    <div className="col-12">
                    <label htmlFor="email" className="form-label">
                        Адреса електронної пошти
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@google.com"
                        value={formValues.email}
                        onChange={handleInputChange}
                        required=""
                    />
                    <div className="invalid-feedback">
                        Будь ласка, введіть дійсну адресу електронної пошти для
                        отримання повідомлення що до стану доставки.
                    </div>
                    </div>

                    <div className="col-12">
                    <label htmlFor="address" className="form-label">
                        Адреса
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Область, Район, Місто/Село, Вулиця/Номер будинку"
                        value={formValues.address}
                        onChange={handleInputChange}
                        required=""
                    />
                    <div className="invalid-feedback">
                        Будь ласка, введіть свою адресу доставки.
                    </div>
                    </div>

                    <div className="col-12">
                    <label htmlFor="number" className="form-label">
                        Номер телефону <span className="text-muted">(Додатково)</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="number"
                        name="number"
                        placeholder="+380"
                        value={formValues.number}
                        onChange={handleInputChange}
                    />
                    </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Система оплати</h4>

                <div className="my-3">
                    <div className="form-check">
                    <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        checked=""
                        required=""
                    />
                    <label className="form-check-label" htmlFor="credit">
                        Credit card
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required=""
                    />
                    <label className="form-check-label" htmlFor="debit">
                        Debit card
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required=""
                    />
                    <label className="form-check-label" htmlFor="paypal">
                        PayPal
                    </label>
                    </div>
                </div>

                <div className="row gy-3">
                    <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                        Фамілія Ім’я
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        name="ccName"
                        placeholder=""
                        value={formValues.ccName}
                        onChange={handleInputChange}
                        required=""
                    />
                    <small className="text-muted">
                        Повне ім'я, як зазначено на картці
                    </small>
                    <div className="invalid-feedback">
                        Потрібно вказати ім’я на картці
                    </div>
                    </div>

                    <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                        Номер картки
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        name="ccNumber"
                        placeholder=""
                        value={formValues.ccNumber}
                        onChange={handleInputChange}
                        required=""
                    />
                    <div className="invalid-feedback">
                        Необхідно вказати номер картки
                    </div>
                    </div>

                    <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                        Термін дії
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        name="ccExpiration"
                        placeholder="ММ/ГГ"
                        value={formValues.ccExpiration}
                        onChange={handleInputChange}
                        required=""
                    />
                    <div className="invalid-feedback">
                        Необхідно ввести термін дії
                    </div>
                    </div>

                    <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                        CVV
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        name="ccCvv"
                        placeholder="***"
                        value={formValues.ccCvv}
                        onChange={handleInputChange}
                        required=""
                    />
                    <div className="invalid-feedback">
                        Необхідно ввести код безпеки
                    </div>
                    </div>
                </div>

                <hr className="my-4" />

                <button
                onClick={handleClick}
                className="w-100 btn btn-outline-success btn-lg mb-3"
                type="submit"
                disabled={!isFormValid}
                >Сплатити
                </button>
                <NavLink to={`/home`} className="btn btn-outline-dark w-25 mx-auto">
                    <span className="fa fa-arrow-left me-1"></span> На головну
                </NavLink>
                </form>
            </div>
            </div>
        </div>
        </>
    );
    };

export default Checkout;