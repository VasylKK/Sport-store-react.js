import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
            <div className="container py-5 my-1">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Про нас</h1>
                        <p className="lead mb-4">
                        <h1>Ласкаво просимо в наш онлайн магазин спортивних товарів!</h1>
                        <p>Ми пропонуємо широкий асортимент високоякісних спортивних товарів для будь-яких потреб і рівня фізичної активності.</p>
                        <ul>
                            <li>Фітнес та тренажери</li>
                            <li>Одяг та взуття</li>
                            <li>Аксесуари для тренувань</li>
                            <li>Здоров'я та догляд</li>
                            <li>Спортивні м'ячі та рекреаційні ігри</li>
                            <li>Велосипеди та аксесуари</li>
                            <li>Водні види спорту</li>
                            <li>Кемпінг та туризм</li>
                        </ul>
                        <p>Незалежно від вашого спортивного захоплення, ми маємо все необхідне, щоб допомогти вам досягти ваших цілей. Замовляйте в нашому магазині прямо зараз та піднімайте свою активність на новий рівень.</p>
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Написати нам</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About