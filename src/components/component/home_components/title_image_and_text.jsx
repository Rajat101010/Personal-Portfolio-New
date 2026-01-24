import '../../css/home_components/title_image_and_text.css'
import { Link } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { IoArrowRedoCircle } from "react-icons/io5";

import me_big from '../../../assets/my_pic/me_big.webp'

import { TbLocationFilled } from "react-icons/tb";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiOverleaf } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiAutocad } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { FaCloudflare } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineArchitecture } from "react-icons/md";
import { SiGooglecloud } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { RiVercelFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiLatex } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

import {About_Me_Description} from '../description/desctiption'


function TitleAndText() {
    return (
        <main>
            <div>
                <div className='title_image_and_text'>
                    <div className='title_text_info_grand_parent'>
                        <div className="title_my_info">
                            <font className='intro_info_font_hello'>
                                Hello, I am
                            </font>
                        </div>
                        <div className="title_my_info">
                            <font className='intro_info_font_name'>
                                Rajat Raj Shah
                            </font>
                        </div>
                        <div className="title_my_info_work_title">
                            <font className='intro_info_font_a'>
                                a
                            </font>
                            <font className='intro_info_font_changing_texts'>
                                <span className="chainging_texts_title">
                                    <span className='data' style={{ "--i": 5 }} data-text="Software Engineer">
                                        Software Engineer </span>
                                    <span className='data' style={{ "--i": 4 }} data-text="Frontend Developer">
                                        Frontend Developer </span>
                                    <span className='data' style={{ "--i": 3 }} data-text="Graphic Designer">
                                        Graphic Designer </span>
                                    <span className='data' style={{ "--i": 2 }} data-text="Project Manager">
                                        Project Manager </span>
                                    <span className='data' style={{ "--i": 1 }} data-text="UI/UX Designer">
                                        UI/UX Designer </span>
                                </span>
                            </font>
                        </div>
                        <div>
                            <p className='truncate-2 title_about_me_paragraph'>
                                <font className='title_my_description_font'>
                                    {About_Me_Description}
                                </font>
                            </p>
                        </div>
                        <div className='social_links_for_intro'>
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
                        <div className='about_me_div_intro__grand_parent'>
                            <Link to="/about-me" className="no-highlight">
                                <div className='about_me_div_intro_parent'>
                                    <div className='about_me_div_intro'>
                                        <font className='about_me_div_intro_font'>
                                            About me
                                        </font>
                                    </div>
                                    <div className='about_me_div_intro_arrow'>
                                        <font className='about_me_div_intro_arrow_font'>
                                            <IoArrowRedoCircle />
                                        </font>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='title_text_image_grand_parent'>
                        <div>
                            <img
                                src={me_big}
                                alt="me"
                                className='me_intro_pic'
                                loading="lazy"
                            />
                        </div>
                        <div className='text_and_arrow_grand_parent'>
                            <div className='text_and_arrow_parent'>
                                <div className="role_tag_wrapper">
                                    <TbLocationFilled className="role_tag_arrow" />
                                    <div className="role_tag above_the_pic_text_font">
                                        Frontend Developer
                                    </div>
                                </div>
                            </div>
                            <div className='text_and_arrow_parent_2'>
                                <div className="role_tag_wrapper">
                                    <TbLocationFilled className="role_tag_arrow_2" />
                                    <div className="role_tag_2 above_the_pic_text_font">
                                        UI/UX Designer
                                    </div>
                                </div>
                            </div>
                            <div className='text_and_arrow_parent_3'>
                                <div className="role_tag_wrapper">
                                    <TbLocationFilled className="role_tag_arrow_3" />
                                    <div className="role_tag_3 above_the_pic_text_font">
                                        Graphic Designer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='title_page_bottom_parent'>
                    <div className='title_page_bottom_div_1'>
                    </div>
                    <div className='title_page_bottom_div_2'>
                        <div className='moving_text_div moving_text_font'>
                            <div className='moving_text_track'>
                                <div className='moving_text_group'>
                                    <span><FaHtml5 className='moving_text_group_first_baby' /></span>
                                    <span><IoLogoGithub /></span>
                                    <span><SiCss3 /></span>
                                    <span><VscVscode /></span>
                                    <span><SiOverleaf /></span>
                                    <span><FaJsSquare /></span>
                                    <span><FaPython /></span>
                                    <span><SiAutocad /></span>
                                    <span><SiCanva /></span>
                                    <span><RiJavaLine /></span>
                                    <span><FaCloudflare /></span>
                                    <span><FaCode /></span>
                                    <span><MdOutlineArchitecture /></span>
                                    <span><SiGooglecloud /></span>
                                    <span><TbBrandReact /></span>
                                    <span><IoLogoFigma /></span>
                                    <span><RiVercelFill /></span>
                                    <span><RiNodejsLine /></span>
                                    <span><SiLatex /></span>
                                    <span><TbBrandMysql /></span>
                                    <span><FaDatabase /></span>
                                    <span><FaGitAlt /></span>
                                </div>
                                <div className='moving_text_group'>
                                    <span><FaHtml5 className='moving_text_group_first_baby' /></span>
                                    <span><IoLogoGithub /></span>
                                    <span><SiCss3 /></span>
                                    <span><VscVscode /></span>
                                    <span><SiOverleaf /></span>
                                    <span><FaJsSquare /></span>
                                    <span><FaPython /></span>
                                    <span><SiAutocad /></span>
                                    <span><SiCanva /></span>
                                    <span><RiJavaLine /></span>
                                    <span><FaCloudflare /></span>
                                    <span><FaCode /></span>
                                    <span><MdOutlineArchitecture /></span>
                                    <span><SiGooglecloud /></span>
                                    <span><TbBrandReact /></span>
                                    <span><IoLogoFigma /></span>
                                    <span><RiVercelFill /></span>
                                    <span><RiNodejsLine /></span>
                                    <span><SiLatex /></span>
                                    <span><TbBrandMysql /></span>
                                    <span><FaDatabase /></span>
                                    <span><FaGitAlt /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TitleAndText;