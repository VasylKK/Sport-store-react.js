import React from 'react'
import { NavLink } from 'react-router-dom'
import { e } from './Header'
import { p } from './buttons/Login'

const PersonalAccount = () => {

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
                            <NavLink to={`/home`} className="btn btn-outline-dark w-25 mx-auto"><span className="fa fa-arrow-left me-1"></span> На головну</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalAccount