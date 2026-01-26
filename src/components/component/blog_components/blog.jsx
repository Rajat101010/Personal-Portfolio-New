import '../../css/blog_components/blog.css'

import { About_Me_Description } from '../description/desctiption'
import { First_Arrival_at_KIIT_University_Description } from '../description/desctiption'



import kiit_university from '../../../assets/blog_images/kiit_university.webp'

//rfce

function blog() {
    return (
        <main>
            <div className='blog_parent'>
                <div className='blog_title_div'>
                    <font className="blog_title_message_font">
                        Hey, I am Rajat
                    </font>
                    <p className='truncate-2 title_about_me_paragraph'>
                        <font className='title_my_description_font'>
                            {About_Me_Description}
                        </font>
                    </p>
                </div>
                <div>
                    <div className='First_Arrival_at_KIIT_University_parent_div'>
                        <div className='blog_my_First_Arrival_at_KIIT_University_image_parent'>
                            <img
                                src={kiit_university}
                                alt=""
                                loading='lazy'
                                className='blog_my_First_Arrival_at_KIIT_University_img'
                            />
                        </div>
                        <div className='First_Arrival_at_KIIT_University_text_div'>
                            <div className='First_Arrival_at_KIIT_University_tag_div_parent'>
                                <div className='First_Arrival_at_KIIT_University_tag_div'>
                                    <font className='First_Arrival_at_KIIT_University_tag_font'>
                                        #FreshersLife
                                    </font>
                                </div>
                                <div className='First_Arrival_at_KIIT_University_tag_div'>
                                    <font className='First_Arrival_at_KIIT_University_tag_font'>
                                        #NewBeginnings
                                    </font>
                                </div>
                                <div className='First_Arrival_at_KIIT_University_tag_div'>
                                    <font className='First_Arrival_at_KIIT_University_tag_font'>
                                        #CampusLife
                                    </font>
                                </div>
                            </div>
                            <font className='First_Arrival_at_KIIT_University_text_font'>
                                First Arrival at KIIT University
                            </font>
                            <p className='truncate-all justification'>
                                <font className='First_Arrival_at_KIIT_University_description_font'>
                                    {First_Arrival_at_KIIT_University_Description}
                                </font>
                            </p>
                            <div className='blog_date_date'>
                                <font className='blog_written_by_name_font'>
                                    By : Rajat Raj Shah
                                </font>
                                <font className='blog_date_font'>
                                    Date : July 2025
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blog_certificate_section'>
                <font className='First_Arrival_at_KIIT_University_text_font'>
                    Milestones
                </font>
                <div className='milestone_parent'>
                    <div className='milestione_individual_div'>
                        <font className='blog_title_font'>
                            OC Member, CPC Event - Cyber Hunt
                        </font>
                        <font className='blog_date_font'>
                            Date : December 2025
                        </font>
                    </div>
                    <div className='milestione_individual_div'>
                        <font className='blog_title_font'>
                            Sales Internship - Venture Foster Group
                        </font>
                        <font className='blog_date_font'>
                            Date : November 2025
                        </font>
                    </div>
                    <div className='milestione_individual_div'>
                        <font className='blog_title_font'>
                            Marketing Internship - Aorta Rooms
                        </font>
                        <font className='blog_date_font'>
                            Date : August 2025
                        </font>
                    </div>
                    <div className='milestione_individual_div'>
                        <font className='blog_title_font'>
                            Completed “Intro. to Tableau” Course
                        </font>
                        <font className='blog_date_font'>
                            Date : January 2025
                        </font>
                    </div>
                    <div className='milestione_individual_div'>
                        <font className='blog_title_font'>
                            Completed "Digital Advertising” Course
                        </font>
                        <font className='blog_date_font'>
                            Date : July 2025
                        </font>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default blog