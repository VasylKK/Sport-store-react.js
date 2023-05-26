import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { e } from './Header'
import { p } from './buttons/Login'
import { status } from './Checkout'

const PersonalAccount = () => {

    const state = useSelector((state) => state.addItem)

    const result = status == 'Оплачено' ? <span className="text-success">{status}, очікуйте доставки</span> : <span className="text-danger">{status}, будь ласка оплатіть</span>;

    const itemList = (item) => {
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div className='m-3'>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <div className='m-3'>
                    {result}
                </div>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3 mt-3">Особистий кабінет</h4>
                            <div className="col-sm-6 mb-3 mt-4">
                                <label htmlFor="firstName" className="fw-bold">Електронна пошта</label>
                                <div className='p-3'>
                                    {e}
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="firstName" className="fw-bold">Пароль</label>
                                <div className='p-3'>
                                    {p}
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 order-md-last">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-info">Ваші замовлення</span>
                                    <span className="badge bg-info rounded-pill">{state.length}</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    {state.map(itemList)}
                                </ul>
                            </div>
                            <NavLink to={`/home`} className="btn btn-outline-dark w-25 mx-auto"><span className="fa fa-arrow-left me-1"></span> На головну</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalAccount