import img4 from '../assets/img4.jpg'
import React from 'react'

export default function Home() {
    return (
        <>
            <div className="card text-bg-dark border-0" >
                <img src={img4} className="card-img bg-position-center" height="550px" alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                        <p className="card-text lead fs-2">CHEACK OUT ALL TRENDS </p>
                    </div>


                </div>
            </div>

        </>
    )
}
