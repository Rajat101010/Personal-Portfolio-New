import '../../css/header/header.css'
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { PiCodeBold } from "react-icons/pi";

import Rajat_CV from '../../../assets/Rajat_CV.pdf';

import { HiMiniHome } from "react-icons/hi2";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { PiGraphBold } from "react-icons/pi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaMicroblog } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";

import { RiMenuFill } from "react-icons/ri";

import me_transparent from '../../../assets/my_pic/me_transparent.webp'

import { IoIosArrowForward } from "react-icons/io";


function ContactHeader() {
    const [menu_panel_all, setmenu_panel_all] = useState(false);
    const screenRef_menu_panel_all = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_menu_panel_all.current && !screenRef_menu_panel_all.current.contains(e.target)) {
                setmenu_panel_all(false);
            }
        }

        if (menu_panel_all) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menu_panel_all]);

    return (
        <main>
            <div className='header_grand_parent'>
                <div className='header_grand_parent_another'>
                </div>
                <div className="header_parent">
                    <Link to="/" className="no-highlight">
                        <div className='header_name_and_logo'>
                            <font className='header_code_icon'>
                                <div className='header_icon_div'>
                                    <PiCodeBold />
                                </div>
                            </font>
                            <div>
                                <font className='header_my_name'>
                                    Ràját
                                </font>
                            </div>
                        </div>
                    </Link>
                    <div className='header_page_link_div'>
                        <Link to="/" className="no-highlight">
                            <font className='header_page_link'>
                                <div className='header_page_link_div_individual'>
                                    <div className='header_icon_icon'>
                                        <HiMiniHome style={{ paddingRight: '5px' }} />
                                    </div>
                                    Home
                                </div>
                            </font>
                        </Link>
                        <Link to="/about" className="no-highlight">
                            <font className='header_page_link'>
                                <div className='header_page_link_div_individual'>
                                    <div className='header_icon_icon'>
                                        <TbInfoHexagonFilled style={{ paddingRight: '5px' }} />
                                    </div>
                                    About
                                </div>
                            </font>
                        </Link>
                        <Link to="/portfolio" className="no-highlight">
                            <font className='header_page_link'>
                                <div className='header_page_link_div_individual'>
                                    <div className='header_icon_icon'>
                                        <PiGraphBold style={{ paddingRight: '5px' }} />
                                    </div>
                                    Portfolio
                                </div>
                            </font>
                        </Link>
                        <Link to="/services" className="no-highlight">
                            <font className='header_page_link'>
                                <div className='header_page_link_div_individual'>
                                    <div className='header_icon_icon'>
                                        <MdOutlineMiscellaneousServices style={{ paddingRight: '5px' }} />
                                    </div>
                                    Services
                                </div>
                            </font>
                        </Link>
                        <Link to="/blog" className="no-highlight">
                            <font className='header_page_link'>
                                <div className='header_page_link_div_individual'>
                                    <div className='header_icon_icon'>
                                        <FaMicroblog style={{ paddingRight: '5px' }} />
                                    </div>
                                    Blog
                                </div>
                            </font>
                        </Link>
                        <Link to="/contact-me" className="no-highlight">
                            <font className='header_page_link_active'>
                                <div className='header_page_link_div_individual'>
                                    <div className='header_icon_icon'>
                                        <AiFillMessage style={{ paddingRight: '5px' }} />
                                    </div>
                                    Contact
                                </div>
                            </font>
                        </Link>
                    </div>
                    <a href={Rajat_CV} download='Rajat_CV' className='no-highlight'>
                        <div className='download_resume_div'>
                            <font className='header_resume_link'>
                                Resume
                            </font>
                        </div>
                    </a>
                    <div className='header_menu_div' onClick={() => setmenu_panel_all(true)}>
                        <font className='header_menu_button'>
                            <RiMenuFill />
                        </font>
                    </div>

                    {menu_panel_all && (
                        <div className="overlay_title">
                            <div className="menu_panel" ref={screenRef_menu_panel_all}>
                                <div className='menu_panner_image_div'>
                                    <img
                                        src={me_transparent}
                                        alt="me"
                                        className='menu_pannel_my_pic'
                                        loading="lazy"
                                    />
                                    <div className='menu_pannel_code_code_code menu_pannel_code_code_code_font'>
                                        <p className='truncate-all hello_world_message'>
                                            Hello World!
                                        </p>
                                    </div>
                                </div>
                                <div className='action_bar_icons_and_name'>
                                    <div className='link_fix'>
                                        <Link to="/" className="no-highlight">
                                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                                    <div className='header_icons_individual'>
                                                        <HiMiniHome style={{ paddingRight: '5px' }} />
                                                    </div>
                                                    <div>
                                                        Home
                                                    </div>
                                                </div>
                                                <div className='arrow_to_go'>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='link_fix'>
                                        <Link to="/about" className="no-highlight">
                                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                                    <div className='header_icons_individual'>
                                                        <TbInfoHexagonFilled style={{ paddingRight: '5px' }} />
                                                    </div>
                                                    <div>
                                                        About
                                                    </div>
                                                </div>
                                                <div className='arrow_to_go'>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='link_fix'>
                                        <Link to="/portfolio" className="no-highlight">
                                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                                    <div className='header_icons_individual'>
                                                        <PiGraphBold style={{ paddingRight: '5px' }} />
                                                    </div>
                                                    <div>
                                                        Portfolio
                                                    </div>
                                                </div>
                                                <div className='arrow_to_go'>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='link_fix'>
                                        <Link to="/services" className="no-highlight">
                                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                                    <div className='header_icons_individual'>
                                                        <MdOutlineMiscellaneousServices style={{ paddingRight: '5px' }} />
                                                    </div>
                                                    <div>
                                                        Services
                                                    </div>
                                                </div>
                                                <div className='arrow_to_go'>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='link_fix'>
                                        <Link to="/blog" className="no-highlight">
                                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                                    <div className='header_icons_individual'>
                                                        <FaMicroblog style={{ paddingRight: '5px' }} />
                                                    </div>
                                                    <div>
                                                        Blog
                                                    </div>
                                                </div>
                                                <div className='arrow_to_go'>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='link_fix'>
                                        <Link to="/contact-me" className="no-highlight">
                                            <div className='action_bar_icons_and_name_individual action_bar_font_active no-highlight'>
                                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                                    <div className='header_icons_individual'>
                                                        <AiFillMessage style={{ paddingRight: '5px' }} />
                                                    </div>
                                                    <div>
                                                        Contact
                                                    </div>
                                                </div>
                                                <div className='arrow_to_go'>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <a href={Rajat_CV} download='Rajat_CV' className='no-highlight'>
                                    <div className='download_resume_menu_pannel'>
                                        <font className='menu_pannel_resume_link'>
                                            Download Resume
                                        </font>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default ContactHeader;

