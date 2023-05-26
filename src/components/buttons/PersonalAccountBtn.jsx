import React from 'react'
import { NavLink } from 'react-router-dom'

const PersonalAccountBtn = () => {
    return (
        <>
            <NavLink to="/PersonalAccount" className="btn btn-outline-success ms-2">
                <span className="fa fa-user me-1"></span> Кабінет
            </NavLink>
        </>
    )
}

export default PersonalAccountBtn