import '../../css/footer/footer.css'
import { Link } from "react-router-dom";

import { FiExternalLink } from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
        <main>
            <div className='footer_grand_parent'>
                <div className="footer_parent">
                    <div className='footer_about_div footer_common_div'>
                        <div>
                            <font className='footer_link_font_title'>
                                About
                            </font>
                        </div>
                        <div className='footer_common_div_links'>
                            <font>
                                <Link to="/about-me" className="no-highlight footer_link_font_description">
                                    About Me
                                </Link>
                            </font>
                            <font>
                                <Link to="/education" className="no-highlight footer_link_font_description">
                                    Education
                                </Link>
                            </font>
                            <font>
                                <Link to="/experience" className="no-highlight footer_link_font_description">
                                    Experience
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_top_projects_div footer_common_div'>
                        <div>
                            <font className='footer_link_font_title'>
                                Top Projects
                            </font>
                        </div>
                        <div className='footer_common_div_links external_link_of_project'>
                            <div className='footer_external_link'>
                                <font>
                                    <Link to="https://air-runner.vercel.app/" className="no-highlight footer_link_font_description footer_external_link">
                                        Air Runner <FiExternalLink style={{ paddingLeft: "3px", fontSize:"0.8rem" }} />
                                    </Link>
                                </font>
                            </div>
                            <div className='footer_external_link'>
                                <font>
                                    <Link to="https://kp-26-hub.vercel.app/" className="no-highlight footer_link_font_description footer_external_link">
                                        KP-26 Hub <FiExternalLink style={{ paddingLeft: "3px", fontSize:"0.8rem"  }} />
                                    </Link>
                                </font>
                            </div>
                            <div className='footer_external_link'>
                                <font>
                                    <Link to="https://rajat101010.github.io/Fly-High-Airline/index.html" className="no-highlight footer_link_font_description footer_external_link">
                                        Fly High <FiExternalLink style={{ paddingLeft: "3px", fontSize:"0.8rem"  }} />
                                    </Link>
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className='footer_portfolio_div footer_common_div'>
                        <div>
                            <font className='footer_link_font_title'>
                                Portfolio
                            </font>
                        </div>
                        <div className='footer_common_div_links'>
                            <font>
                                <Link to="/projects" className="no-highlight footer_link_font_description">
                                    Projects
                                </Link>
                            </font>
                            <font>
                                <Link to="/certificates" className="no-highlight footer_link_font_description">
                                    Certificates
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_quick_links_div footer_common_div'>
                        <div>
                            <font className='footer_link_font_title'>
                                Quick Links
                            </font>
                        </div>
                        <div className='footer_common_div_links'>
                            <font>
                                <Link to="/blog" className="no-highlight footer_link_font_description">
                                    Blog
                                </Link>
                            </font>
                            <font>
                                <Link to="/contact-me" className="no-highlight footer_link_font_description">
                                    Contact
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_connect_with_me_div footer_common_div'>
                        <div>
                            <font className='footer_link_font_title'>
                                Connect with me
                            </font>
                        </div>
                        <div className='social_links_for_footer'>
                            <Link to="https://www.linkedin.com/in/rajat-raj-shah" className="no-highlight">
                                <div className="no-highlight about_us_social_icon_font">
                                    <FaLinkedinIn />
                                </div>
                            </Link>
                            <Link to="https://github.com/Rajat101010" className="no-highlight">
                                <div className="no-highlight about_us_social_icon_font">
                                    <LuGithub />
                                </div>
                            </Link>
                            <Link to="https://x.com/rajat_raj_shah" className="no-highlight">
                                <div className="no-highlight about_us_social_icon_font">
                                    <FaXTwitter />
                                </div>
                            </Link>
                            <Link to="mailto:rajatrajshah@gmail.com" className="no-highlight">
                                <div className="no-highlight about_us_social_icon_font">
                                    <SiGmail />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='copytight_message_div'>
                    <font className='copytight_message_font'>
                        Copyright © 2026 Rajat Raj Shah
                    </font>
                </div>
            </div>
        </main>
    );
}

export default Footer;