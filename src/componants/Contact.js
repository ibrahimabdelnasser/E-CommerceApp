// components/Contact.js
import contact from '../assets/contact.jpg'
import React from 'react';

const Contact = () => {
    return (
        <div className='container  d-flex justify-content-center flex-
        wrap '>
            <div className="col-md-6">
                <img
                    src={contact}
                    alt="About Us"
                    className="img-fluid"

                />
            </div>
            <div className="container my-5  ">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-4">Contact Us</h2>
                        <p>
                            Have any questions or concerns? Feel free to get in touch with us.
                            Our customer support team is here to assist you.
                        </p>
                        <p>
                            Email: <a href="mailto:info@lacollection.com">info@lacollection.com</a>
                        </p>
                        <p>
                            Phone: +1 (555) 123-4567
                        </p>
                        <p>
                            Address: 123 Fashion Street, Cityville, Country
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;