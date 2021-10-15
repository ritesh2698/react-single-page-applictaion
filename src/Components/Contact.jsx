import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1 className="text-center" style={{color:"#4f565e"}}>Contact Us</h1>
            <div className="address">
            <div className="reach-us">
                <h3>Reach Us</h3>
                <p>13, Manthan Industrial Estate, Phase - 1 , R M engineering compound, GIDC vatva,
                    Ahmedabad-382445, Gujarat, India</p>
                <p>Dinesh Prajapati (Proprietor)</p>
                <p>Mobile Number : 8779024646</p>
                <p>Email Address: riteshprajapati30@gmail.com</p>
            </div>
            <div className="iframe">
                <iframe
                title="hero"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29388.344740030763!2d72.61133193955078!3d22.967048399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e899ed07dad55%3A0xc9e54ada874e72a8!2sR.%20N.%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1634284034110!5m2!1sen!2sin" 
                    // width="600" 
                    // height="450" 
                    style={{ border: 0 }} 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
            </div>
            <hr/>
                <div className="contact-form" >
                    <h2 id="contact-form" className="text-center">Contact Form</h2>
                    <div className="form">
                        <form className="form1" action="home.html">
                            <div className="form-group">
                                <label for="name">Your Name (required)</label>
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email address (required)</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label for="sub">Subject</label>
                                <input type="text" className="form-control" id="sub"/>
                            </div>
                            <div className="form-group">
                                <label for="text">Your Message</label>
                                <textarea name="message" className="form-control">
                                </textarea>
                            </div>

                            <button type="submit" className="btn btn-primary mt-2 text-center">Submit</button>
                        </form>
                    </div>
                </div>

            

        </div>
        
    )
}

export default Contact
