import React from 'react'
import { Link } from 'react-router-dom';
export default function Product(props) {
    const { product } = props;
    return (
        <>
            <div className='col-md-3 mt-4' >
                <div className="card h-100 text-center p-4 " key={product.id}>
                    <img src={product.image} className="card-img-top" alt={product.title} height="380px" />
                    <div className="card-body text-center ">
                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}... </h5>
                        <p className="card-text lead fw-bold"> {product.price}$ </p>
                        <Link to={`product/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
