import '../../css/services_components/services.css'
import { Link } from "react-router-dom";

import { MdOutlineMiscellaneousServices } from "react-icons/md";

import { TbWorldWww } from "react-icons/tb";
import { TbUxCircle } from "react-icons/tb";
import { BiShapeCircle } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { TbChartCircles } from "react-icons/tb";

import { Web_Dev_Description } from '../description/desctiption'
import { UIUX_Description } from '../description/desctiption'
import { Architecture_Description } from '../description/desctiption'
import { Product_Description } from '../description/desctiption'
import { Logo_Description } from '../description/desctiption'


function services() {
  return (
    <main>
      <div>
        <div className='services_another_grand_parent'>
          <div className='services_title'>
            <font className='services_title_icon'>
              <MdOutlineMiscellaneousServices />
            </font>
            <font className='services_title_text'>
              Services I Provide
            </font>
          </div>
          <div className='service_page_division_grand_parent'>
            <div className='services_description_div_individual_mini_service'>
              <div className='service_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <TbWorldWww />
                  </font>
                </div>
                <font className='services_description_title_font'>
                  Website Design
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {Web_Dev_Description}
                </p>
              </font>
              <div className='service_view_sample_contact_another_parent'>
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
            <div className='services_description_div_individual_mini_service'>
              <div className='service_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <TbUxCircle />
                  </font>
                </div>
                <font className='services_description_title_font'>
                  UI/UX Design
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {UIUX_Description}
                </p>
              </font>
              <div className='service_view_sample_contact_another_parent'>
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
            <div className='services_description_div_individual_mini_service'>
              <div className='service_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <BiShapeCircle />
                  </font>
                </div>
                <font className='services_description_title_font'>
                  Architectural Design
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {Architecture_Description}
                </p>
              </font>
              <div className='service_view_sample_contact_another_parent'>
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
            <div className='services_description_div_individual_mini_service'>
              <div className='service_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <AiOutlineProduct />
                  </font>
                </div>
                <font className='services_description_title_font'>
                  Product Design
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {Product_Description}
                </p>
              </font>
              <div className='service_view_sample_contact_another_parent'>
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
            <div className='services_description_div_individual_mini_service'>
              <div className='service_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <TbChartCircles />
                  </font>
                </div>
                <font className='services_description_title_font'>
                  Logo Design
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {Logo_Description}
                </p>
              </font>
              <div className='service_view_sample_contact_another_parent'>
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
      </div>
    </main>
  )
}

export default services