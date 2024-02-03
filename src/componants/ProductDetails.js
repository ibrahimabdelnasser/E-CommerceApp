import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { addToCart } from '../rtk/slices/cart-slice';


export default function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products"
    const params = useParams();
    console.log(params)
    const [product, setproduct] = useState({});
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => { setproduct(product) })


    }, []);

    const dispatch = useDispatch();


    return (
        <>
            <div className='container d-flex align-items-center mt-3 flex-wrap '>
                <div className='col-md-6 px-2 py-2  my-4' key={product.id}>

                    <img src={product.image} className="card-img-top" alt={product.title} height="450px" />

                </div>
                <div className="container col-md-6 "  >
                    <h4 className='text-uppercase text-black-50'>{product.category} </h4>
                    <h5 className="display-5 mb-0  ">{product.title} </h5>
                    <p className='lead fw-bolder'>Rating{product.rating && product.rating.rate} <i className='fa fa-star'></i> </p>
                    <p className=" display-6 my-4 fw-bold"> {product.price}$ </p>
                    <p className='lead fs-3 '>{product.description} </p>
                    <button className='btn btn-outline-dark px-4 py-2 mb-3' onClick={() => dispatch(addToCart(product))} >Add To Cart</button>
                    <Link to="/cart" className='btn btn-outline-dark ms-2 px-3 py-2 mb-3'>Go To Cart</Link>
                </div>
            </div>

        </>


    )
}
