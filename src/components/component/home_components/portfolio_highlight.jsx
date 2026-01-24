import '../../css/home_components/portfolio_highlight.css'

import { FaGlobe } from "react-icons/fa";
import { TbFiltersFilled } from "react-icons/tb";
import { FaCertificate } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

function PortfolioHilight() {
    return (
        <main>
            <div>
                <div className="highlights">
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <FaGlobe />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    10+
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Web Project
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <TbFiltersFilled />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    99+
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Professional Skills
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <FaCertificate />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    10+
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Industry Certifications
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <FaGear />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    20+
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Total Projects
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PortfolioHilight;