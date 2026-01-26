import '../../css/home_components/services.css'
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { MdOutlineMiscellaneousServices } from "react-icons/md";

import { TbWorldWww } from "react-icons/tb";
import { TbUxCircle } from "react-icons/tb";
import { BiShapeCircle } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";

import { IoArrowForward } from "react-icons/io5";

import { Web_Dev_Description } from '../description/desctiption'
import { UIUX_Description } from '../description/desctiption'
import { Architecture_Description } from '../description/desctiption'
import { Product_Description } from '../description/desctiption'

function Services() {

    const [activeService, setActiveService] = useState(null); // null | service id
    const screenRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef.current && !screenRef.current.contains(e.target)) {
                setActiveService(null);
            }
        }

        if (activeService !== null) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeService]);

    return (
        <main>
            <div className='services_grand_parent'>
                <div className='services_title'>
                    <font className='services_title_icon'>
                        <MdOutlineMiscellaneousServices />
                    </font>
                    <font className='services_title_text'>
                        Services I Provide
                    </font>
                </div>
                <div className='services_description_div'>
                    <div className='services_description_div_individual no-highlight' onClick={() => setActiveService(1)}>
                        <div className='services_description_div_individual_icon'>
                            <font className='services_description_icon_font'>
                                <TbWorldWww />
                            </font>
                        </div>
                        <font className='services_description_title_font'>
                            Website Design
                        </font>
                        <font className='services_description_description_font'>
                            <p className='truncate-2 title_about_me_paragraph'>
                                {Web_Dev_Description}
                            </p>
                        </font>
                        <div className='service_learn_more'>
                            <font className='service_learn_more_font'>
                                Learn more
                            </font>
                            <div className='service_learn_more_icon'>
                                <font className='service_learn_more_icon_font'>
                                    <IoArrowForward />
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className='services_description_div_individual no-highlight' onClick={() => setActiveService(2)}>
                        <div className='services_description_div_individual_icon'>
                            <font className='services_description_icon_font'>
                                <TbUxCircle />
                            </font>
                        </div>
                        <font className='services_description_title_font'>
                            UI/UX Design
                        </font>
                        <font className='services_description_description_font'>
                            <p className='truncate-2 title_about_me_paragraph'>
                                {UIUX_Description}
                            </p>
                        </font>
                        <div className='service_learn_more'>
                            <font className='service_learn_more_font'>
                                Learn more
                            </font>
                            <div className='service_learn_more_icon'>
                                <font className='service_learn_more_icon_font'>
                                    <IoArrowForward />
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className='services_description_div_individual no-highlight' onClick={() => setActiveService(3)}>
                        <div className='services_description_div_individual_icon'>
                            <font className='services_description_icon_font'>
                                <BiShapeCircle />
                            </font>
                        </div>
                        <font className='services_description_title_font'>
                            Architectural Design
                        </font>
                        <font className='services_description_description_font'>
                            <p className='truncate-2 title_about_me_paragraph'>
                                {Architecture_Description}
                            </p>
                        </font>
                        <div className='service_learn_more'>
                            <font className='service_learn_more_font'>
                                Learn more
                            </font>
                            <div className='service_learn_more_icon'>
                                <font className='service_learn_more_icon_font'>
                                    <IoArrowForward />
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className='services_description_div_individual no-highlight' onClick={() => setActiveService(4)}>
                        <div className='services_description_div_individual_icon'>
                            <font className='services_description_icon_font'>
                                <AiOutlineProduct />
                            </font>
                        </div>
                        <font className='services_description_title_font'>
                            Product Design
                        </font>
                        <font className='services_description_description_font'>
                            <p className='truncate-2 title_about_me_paragraph'>
                                {Product_Description}
                            </p>
                        </font>
                        <div className='service_learn_more'>
                            <font className='service_learn_more_font'>
                                Learn more
                            </font>
                            <div className='service_learn_more_icon'>
                                <font className='service_learn_more_icon_font'>
                                    <IoArrowForward />
                                </font>
                            </div>
                        </div>
                    </div>


                    {activeService === 1 && (
                        <div className="overlay">
                            <div className="mini_service" ref={screenRef}>
                                <div className='services_description_div_individual_mini_service'>
                                    <div className='services_description_div_individual_icon'>
                                        <font className='services_description_icon_font'>
                                            <TbWorldWww />
                                        </font>
                                    </div>
                                    <font className='services_description_title_font'>
                                        Website Design
                                    </font>
                                    <font className='services_description_description_font'>
                                        <p className='truncate-all title_about_me_paragraph'>
                                            {Web_Dev_Description}
                                        </p>
                                    </font>
                                    <div className='service_view_sample_contact_parent'>
                                        <Link to="/projects" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    View Sample
                                                </font>
                                            </div>
                                        </Link>
                                        <Link to="/contact-me" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    Contact
                                                </font>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeService === 2 && (
                        <div className="overlay">
                            <div className="mini_service" ref={screenRef}>
                                <div className='services_description_div_individual_mini_service'>
                                    <div className='services_description_div_individual_icon'>
                                        <font className='services_description_icon_font'>
                                            <TbUxCircle />
                                        </font>
                                    </div>
                                    <font className='services_description_title_font'>
                                        UI/UX Design
                                    </font>
                                    <font className='services_description_description_font'>
                                        <p className='truncate-all title_about_me_paragraph'>
                                            {UIUX_Description}
                                        </p>
                                    </font>
                                    <div className='service_view_sample_contact_parent'>
                                        <Link to="/projects" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    View Sample
                                                </font>
                                            </div>
                                        </Link>
                                        <Link to="/contact-me" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    Contact
                                                </font>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeService === 3 && (
                        <div className="overlay">
                            <div className="mini_service" ref={screenRef}>
                                <div className='services_description_div_individual_mini_service'>
                                    <div className='services_description_div_individual_icon'>
                                        <font className='services_description_icon_font'>
                                            <BiShapeCircle />
                                        </font>
                                    </div>
                                    <font className='services_description_title_font'>
                                        Architectural Design
                                    </font>
                                    <font className='services_description_description_font'>
                                        <p className='truncate-all title_about_me_paragraph'>
                                            {Architecture_Description}
                                        </p>
                                    </font>
                                    <div className='service_view_sample_contact_parent'>
                                        <Link to="/" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    View Sample
                                                </font>
                                            </div>
                                        </Link>
                                        <Link to="/contact-me" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    Contact
                                                </font>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeService === 4 && (
                        <div className="overlay">
                            <div className="mini_service" ref={screenRef}>
                                <div className='services_description_div_individual_mini_service'>
                                    <div className='services_description_div_individual_icon'>
                                        <font className='services_description_icon_font'>
                                            <AiOutlineProduct />
                                        </font>
                                    </div>
                                    <font className='services_description_title_font'>
                                        Product Design
                                    </font>
                                    <font className='services_description_description_font'>
                                        <p className='truncate-all title_about_me_paragraph'>
                                            {Product_Description}
                                        </p>
                                    </font>
                                    <div className='service_view_sample_contact_parent'>
                                        <Link to="https://drive.google.com/drive/folders/14ieL6fICtFv0tJHe2R_3QQLRP3KoS1Ui?usp=sharing" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    View Sample
                                                </font>
                                            </div>
                                        </Link>
                                        <Link to="/contact-me" className="no-highlight">
                                            <div className='service_view_sample_contact_button'>
                                                <font className='service_learn_more_font'>
                                                    Contact
                                                </font>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}




                </div>
                <div>
                    <div className='view_all_div'>
                        <Link to="/services" className="no-highlight view_all_div">
                            <font className='view_all_font'>
                                View all services
                            </font>
                            <div>
                                <font className='view_all_arrow_icon'>
                                    <IoArrowForward />
                                </font>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Services;
