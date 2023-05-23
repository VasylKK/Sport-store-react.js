import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import { setset } from './Header'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {

    const [cartBtn, setCartBtn] = useState("Додати до кошика")
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (setset) {
            if (cartBtn === "Додати до кошика") {
                dispatch(addItem(product));
                setCartBtn("Вилучити з кошика");
            } else {
                dispatch(delItem(product));
                setCartBtn("Додати до кошика");
            }
        } else {
            toast.error("Будь ласка, увійдіть в обліковий запис, щоб додати товар до кошика.");
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">₴{product.price}</h2>
                    <p className="lead">{product.desc}</p>
                    <button  onClick={()=>handleCart(product)} className="btn btn-danger my-3">{cartBtn}</button>
                    <NavLink to={`/products`} className="btn btn-outline-dark"><span className="fa fa-arrow-left me-1"></span> Назад до товарів</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail