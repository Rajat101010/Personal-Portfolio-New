import '../../css/home_components/skills.css'

import { TbFiltersFilled } from "react-icons/tb";

function Skills() {
    return (
        <main>
            <div className='services_grand_parent'>
                <div className='services_title'>
                    <font className='services_title_icon'>
                        <TbFiltersFilled />
                    </font>
                    <font className='services_title_text'>
                        Professional Skills
                    </font>
                </div>
                <div className='skills_individual_parent'>
                    <div className='skills_individual_div'>
                        <font className='skills_title_font'>
                            Programming Languages
                        </font>
                        <font className='skills_individual_div_description'>
                            <div className='skills_individual_div_parent_parent'>
                                <div className='skills_individual_div_child'>
                                    React.js
                                </div>
                                <div className='skills_individual_div_child'>
                                    C
                                </div>
                                <div className='skills_individual_div_child'>
                                    Python
                                </div>
                                <div className='skills_individual_div_child'>
                                    JavaScript
                                </div>
                                <div className='skills_individual_div_child'>
                                    HTML
                                </div>
                                <div className='skills_individual_div_child'>
                                    CSS
                                </div>
                                <div className='skills_individual_div_child'>
                                    MySQL
                                </div>
                                <div className='skills_individual_div_child'>
                                    Oracle
                                </div>
                                <div className='skills_individual_div_child'>
                                    Latex
                                </div>
                            </div>
                        </font>
                    </div>
                    <div className='skills_individual_div'>
                        <font className='skills_title_font'>
                            Developer Tools
                        </font>
                        <font className='skills_individual_div_description'>
                            <div className='skills_individual_div_parent_parent'>
                                <div className='skills_individual_div_child'>
                                    Git
                                </div>
                                <div className='skills_individual_div_child'>
                                    GitHub
                                </div>
                                <div className='skills_individual_div_child'>
                                    CloudFlare
                                </div>
                                <div className='skills_individual_div_child'>
                                    VScode
                                </div>
                                <div className='skills_individual_div_child'>
                                    Vercel
                                </div>
                                <div className='skills_individual_div_child'>
                                    Ubuntu
                                </div>
                                <div className='skills_individual_div_child'>
                                    Overleaf
                                </div>
                            </div>
                        </font>
                    </div>
                    <div className='skills_individual_div'>
                        <font className='skills_title_font'>
                            Graphic & Video Design
                        </font>
                        <font className='skills_individual_div_description'>
                            <div className='skills_individual_div_parent_parent'>
                                <div className='skills_individual_div_child'>
                                    Figma
                                </div>
                                <div className='skills_individual_div_child'>
                                    Canva
                                </div>
                                <div className='skills_individual_div_child'>
                                    PixelLab
                                </div>
                                <div className='skills_individual_div_child'>
                                    AutoCad
                                </div>
                                <div className='skills_individual_div_child'>
                                    Live Home 3D
                                </div>
                                <div className='skills_individual_div_child'>
                                    CapCut
                                </div>
                                <div className='skills_individual_div_child'>
                                    KineMaster
                                </div>
                            </div>
                        </font>
                    </div>
                    <div className='skills_individual_div'>
                        <font className='skills_title_font'>
                            Office Tools
                        </font>
                        <font className='skills_individual_div_description'>
                            <div className='skills_individual_div_parent_parent'>
                                <div className='skills_individual_div_child'>
                                    Microsoft Office
                                </div>
                                <div className='skills_individual_div_child'>
                                    Google Workspace
                                </div>
                                <div className='skills_individual_div_child'>
                                    Zoho Workspace
                                </div>
                            </div>
                        </font>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Skills;