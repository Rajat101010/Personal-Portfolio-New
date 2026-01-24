import '../../css/home_components/projects.css'
import { Link } from "react-router-dom";

import { FaGear } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

import air_runner from '../../../assets/projects_images/1.webp'
import kp_26_hub from '../../../assets/projects_images/2.webp'
import fly_high from '../../../assets/projects_images/3.webp'

import { AirRunner_Description } from '../description/desctiption'
import { KP_26_Hub_Description } from '../description/desctiption'
import { Fly_High_Description } from '../description/desctiption'

function Projects() {
    return (
        <main>
            <div className='project_grand_parent'>
                <div className='services_title'>
                    <font className='services_title_icon'>
                        <FaGear />
                    </font>
                    <font className='services_title_text'>
                        My Projects
                    </font>
                </div>
                <div className='project_individual_parent'>
                    <div className='project_individual'>
                        <div>
                            <img
                                src={air_runner}
                                alt="project"
                                className='project_individual_pic'
                                loading='lazy' />
                        </div>
                        <div className='project_individual_text_part'>
                            <font className='skills_individual_div_description'>
                                <div className='skills_individual_div_parent_parent'>
                                    <div className='skills_individual_div_child'>
                                        React.js
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        HTML
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        CSS
                                    </div><div className='skills_individual_div_child'>
                                        Canva
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        PixelLab
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        Git
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        GitHub
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        VScode
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        Vercel
                                    </div>
                                </div>
                            </font>
                            <div>
                                <font className='skills_title_font'>
                                    Airline Website - Air Runner
                                </font>
                                <font className='services_description_description_font'>
                                    <p className='truncate-2 title_about_me_paragraph'>
                                        {AirRunner_Description}
                                    </p>
                                </font>
                            </div>
                            <a href="https://air-runner.vercel.app/" className="no-highlight">
                                <div className='service_learn_more'>
                                    <div className='view_page_buttom'>
                                        <font className='service_learn_more_font'>
                                            View Page
                                        </font>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='project_individual'>
                        <div>
                            <img
                                src={kp_26_hub}
                                alt="project"
                                className='project_individual_pic'
                                loading='lazy' />
                        </div>
                        <div className='project_individual_text_part'>
                            <font className='skills_individual_div_description'>
                                <div className='skills_individual_div_parent_parent'>
                                    <div className='skills_individual_div_child'>
                                        React.js
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        HTML
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        CSS
                                    </div><div className='skills_individual_div_child'>
                                        Canva
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        PixelLab
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        Git
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        GitHub
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        VScode
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        Vercel
                                    </div>
                                </div>
                            </font>
                            <div>
                                <font className='skills_title_font'>
                                    Hostel Web App - KP-26 Hub
                                </font>
                                <font className='services_description_description_font'>
                                    <p className='truncate-2 title_about_me_paragraph'>
                                        {KP_26_Hub_Description}
                                    </p>
                                </font>
                            </div>
                            <a href="https://kp-26-hub.vercel.app/" className="no-highlight">
                                <div className='service_learn_more'>
                                    <div className='view_page_buttom'>
                                        <font className='service_learn_more_font'>
                                            View Page
                                        </font>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='project_individual'>
                        <div>
                            <img
                                src={fly_high}
                                alt="project"
                                className='project_individual_pic'
                                loading='lazy' />
                        </div>
                        <div className='project_individual_text_part'>
                            <font className='skills_individual_div_description'>
                                <div className='skills_individual_div_parent_parent'>
                                    <div className='skills_individual_div_child'>
                                        React.js
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        HTML
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        CSS
                                    </div><div className='skills_individual_div_child'>
                                        Canva
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        PixelLab
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        Git
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        GitHub
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        VScode
                                    </div>
                                    <div className='skills_individual_div_child'>
                                        Vercel
                                    </div>
                                </div>
                            </font>
                            <div>
                                <font className='skills_title_font'>
                                    Airline Website - Fly High
                                </font>
                                <font className='services_description_description_font'>
                                    <p className='truncate-2 title_about_me_paragraph'>
                                        {Fly_High_Description}
                                    </p>
                                </font>
                            </div>
                            <a href="https://rajat101010.github.io/Fly-High-Airline/index.html" className="no-highlight">
                                <div className='service_learn_more'>
                                    <div className='view_page_buttom'>
                                        <font className='service_learn_more_font'>
                                            View Page
                                        </font>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='view_all_div'>
                        <Link to="/projects" className="no-highlight view_all_div">
                            <font className='view_all_font'>
                                View all Projects
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

export default Projects;