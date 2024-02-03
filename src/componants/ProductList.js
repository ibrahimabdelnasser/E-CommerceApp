
import React, { useEffect, useState } from 'react'
import Product from './Product';
export default function ProductList() {
    const [products, setproducts] = useState([]);
    const api = 'https://fakestoreapi.com/products'
    const [categories, setcategories] = useState([]);
    const getPrductInCategory = (catName) => {
        fetch(`${api}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setproducts(data))
    }

    const getcategories = () => {
        fetch(`${api}/categories`)
            .then((res) => res.json())
            .then((data) => setcategories(data))
    }
    const getproducts = () => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setproducts(data))
    }

    useEffect(() => {
        getcategories();
        getproducts();
    }, [])
    return (
        <>

            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                    </div>

                </div>
            </div>
            <div className='buttons d-flex flex-wrap justify-content-center mx-5 mb-4 pb-5'>
                <button className='btn btn-outline-dark me-2  mb-3' onClick={() => { getproducts(); }} >
                    All
                </button>

                {

                    categories.map((cat) =>

                        <button className='btn btn-outline-dark me-2 mb-3' key={cat} onClick={() => { getPrductInCategory(cat); }} >
                            {cat}
                        </button>

                    )
                }
            </div>


            <div className='row'>


                {
                    products.map((product) => {
                        return (
                            <Product product={product} key={product.id} />


                        )

                    })
                }
            </div>







        </>
    )
}     