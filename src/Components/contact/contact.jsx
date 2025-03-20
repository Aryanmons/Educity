import React, { useState } from 'react';
import './contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0b040a86-35b9-4914-8d33-14bef3cdcd5a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>
                    Feel free to reach out through the contact form or find our contact
                    information below. Your feedback, questions, and suggestions are
                    important to us as we strive to provide exceptional service to our
                    university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Contact@greatstack.com</li>
                    <li><img src={phone_icon} alt="" /> +91 12345678</li>
                    <li><img src={location_icon} alt="" /> Muzaffarpur, Bihar, India</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}> {/* Fixed onSubmit */}
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    
                    <button type='submit' className='btn dark-btn'>
                        Submit now <img src={white_arrow} alt="" />
                    </button>
                </form>
                <span>{result}</span> {/* Uncommented and fixed */}
            </div>
        </div>
    );
};

export default Contact;
