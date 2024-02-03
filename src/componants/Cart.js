import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCard, deleteFromCard } from '../rtk/slices/cart-slice';
export default function Cart() {
    const cart = useSelector(state => state.cart);
    console.log(cart)

    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(clearCard())} className='btn btn-primary mt-4 mb-4'>Clear Cart</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) =>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.title} </td>
                            <td><img height="50px" src={product.image} alt={product.title} /></td>

                            <td>{product.price}$ </td>
                            <td><button onClick={() => dispatch(deleteFromCard(product))} className='btn btn-outline-dark px-4 py-2 '>Delete From Cart</button></td>
                        </tr>

                    )}

                </tbody>
            </table>

        </>
    )
}
