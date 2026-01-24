import '../../css/contact_me_components/contact_form.css'
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ContactMe_Description } from '../description/desctiption'

import contact_background from '../../../assets/background_imgs/contact_page_background.webp'

function ContactMe() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");

    // Generate captcha
    const generateCaptcha = () => {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(code);
        setUserCaptcha("");
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // Validation
    const isCaptchaValid = userCaptcha.toUpperCase() === captcha;
    const isFormFilled = name && email && message;
    const canSubmit = isFormFilled && isCaptchaValid;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!canSubmit) return;

    //     e.preventDefault();
    //     if (!canSubmit) return;

    //     setShowPopup(true);
    //     setTimeout(() => {
    //         setShowPopup(false);
    //     }, 2500);
    // };




    const [showPopup, setShowPopup] = useState(false);




    //contact form
    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);

    //     formData.append("access_key", "6f5357d8-55bf-422c-b961-6c29d3474786");

    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);

    //     const res = await fetch("https://api.web3forms.com/submit", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: json
    //     }).then((res) => res.json());

    //     if (res.success) {
    //         console.log("Success", res);
    //     }
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!canSubmit) return;

        const formData = new FormData(e.target);
        formData.append("access_key", "6f5357d8-55bf-422c-b961-6c29d3474786");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);

                // Show popup
                setShowPopup(true);

                // Auto close popup
                setTimeout(() => {
                    setShowPopup(false);
                }, 2500);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };




    return (
        <main>
            <div>
                <div className='contact_page_parent'>
                    <div className='contact_page_info_part'>
                        <div>
                            <font className='contact_page_info_part_title'>
                                Let’s Connect
                            </font>
                            <font className='contact_page_info_part_description'>
                                <p className='truncate-all contact_me_description'>
                                    {ContactMe_Description}
                                </p>
                            </font>
                        </div>
                        <div className='free_space'>
                            <img
                                src={contact_background}
                                alt="img"
                                loading='lazy'
                                className='contact_background_image'
                            />
                        </div>
                    </div>
                    <div className='contact_form_form'>
                        <font className='send_a_message_font'>
                            Send a Message
                        </font>
                        <div>
                            <form className="form-container"
                            onSubmit={handleSubmit}
                            // onSubmit={onSubmit}
                            >
                                <div className="form-container">
                                    <div className="input-group">
                                        <input
                                            type="name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            name='name'
                                        />
                                        <label>Full Name *</label>
                                    </div>

                                    <div className="input-group">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            name='email'
                                        />
                                        <label>Email Address*</label>
                                    </div>

                                    <div className="input-group">
                                        <input
                                            type="text"
                                            required
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            name='subject'
                                        />
                                        <label>Subject *</label>
                                    </div>

                                    <div className="input-group">
                                        <textarea
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows="4"
                                            name='message'
                                        />
                                        <label>Message *</label>
                                    </div>
                                </div>


                                {/* CAPTCHA Display */}
                                <div className="captcha-box">
                                    <span className="captcha-text">{captcha}</span>
                                    <button type="button" onClick={generateCaptcha} className="refresh-btn no-highlight">
                                        ↻
                                    </button>
                                </div>

                                {/* CAPTCHA Input */}
                                <div className="input-group">
                                    <input
                                        type="text"
                                        required
                                        value={userCaptcha}
                                        onChange={(e) => setUserCaptcha(e.target.value)}
                                    />
                                    <label>Captcha *</label>
                                </div>

                                <button type="submit" disabled={!canSubmit} className="submit-btn no-highlight">
                                    Send Message
                                </button>
                            </form>

                            {showPopup && (
                                <div className="popup-overlay">
                                    <div className="popup">
                                        <div className="popup-icon">✓</div>
                                        <font className="message_receive_title">
                                            Message Received
                                        </font>
                                        <font className='message_receive_description'>
                                            <p className='truncate-all contact_me_send_message'>
                                                Your message is safely in my inbox. I’ll get back to you soon.
                                            </p>
                                        </font>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactMe;