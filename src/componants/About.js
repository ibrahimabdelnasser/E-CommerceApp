// components/About.js
import about from '../assets/about.jpg'
import React from 'react';

const About = () => {
    return (
        <div className='container d-flex justify-content-center flex-wrap '>
            <div className="col-md-6">
                <img
                    src={about}
                    alt="About Us"
                    className="img-fluid"
                    height="auto"
                />
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-4">About Us</h2>
                        <p>
                            Welcome to La Collection, your go-to destination for the latest and greatest in fashion.
                            We believe in providing high-quality products that not only look good but also make you feel good.
                            Our curated collection of clothing and accessories is carefully selected to suit every style and occasion.
                        </p>
                        <p>
                            At La Collection, we are passionate about fashion and committed to delivering an exceptional shopping experience.
                            Explore our online store and discover a world of style and elegance.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;