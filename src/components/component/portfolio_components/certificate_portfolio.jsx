import '../../css/portfolio_components/certificate_portfolio.css'
import { Link } from "react-router-dom";

import { FaCertificate } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";


import { OC_Member_Description } from '../description/desctiption'
import { VFG_Internship_Description } from '../description/desctiption'
import { Aorta_Internship_Description } from '../description/desctiption'
import { Introduction_to_Tableau_Description } from '../description/desctiption'



function certificate_portfolio() {
  return (
    <main>
      <div className='project_another_grand_parent'>
        <div className='services_title certificate_title'>
          <font className='services_title_icon'>
            <FaCertificate />
          </font>
          <font className='services_title_text'>
            Certifications
          </font>
        </div>
        <div className='certificate_title_new_grand_parent'>

          <div className='services_description_div'>
            <div className='certificate_description_div_individual'>
              <div className='certificate_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <PiCertificate />
                  </font>
                </div>
                <font className='certificate_description_title_font'>
                  Organizing Committee Member Certificate
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {OC_Member_Description}
                </p>
              </font>
              <div className='certificate_provider_and_date'>
                <font className='blog_written_by_name_font'>
                  By : Cyber Peace Corps
                </font>
                <font className='blog_date_font'>
                  Date : December 2025
                </font>
              </div>
            </div>
            <div className='certificate_description_div_individual'>
              <div className='certificate_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <PiCertificate />
                  </font>
                </div>
                <font className='certificate_description_title_font'>
                  Internship Completion Certificate
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {VFG_Internship_Description}
                </p>
              </font>
              <div className='certificate_provider_and_date'>
                <font className='blog_written_by_name_font'>
                  By : Venture Foster Group
                </font>
                <font className='blog_date_font'>
                  Date : November 2025
                </font>
              </div>
            </div>
            <div className='certificate_description_div_individual'>
              <div className='certificate_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <PiCertificate />
                  </font>
                </div>
                <font className='certificate_description_title_font'>
                  Internship Completion Certificate
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {Aorta_Internship_Description}
                </p>
              </font>
              <div className='certificate_provider_and_date'>
                <font className='blog_written_by_name_font'>
                  By : Aorta Rooms
                </font>
                <font className='blog_date_font'>
                  Date : August 2025
                </font>
              </div>
            </div>
            <div className='certificate_description_div_individual'>
              <div className='certificate_title_new_parent'>
                <div className='services_description_div_individual_icon'>
                  <font className='services_description_icon_font'>
                    <PiCertificate />
                  </font>
                </div>
                <font className='certificate_description_title_font'>
                  Course Completion Certificate
                </font>
              </div>
              <font className='services_description_description_font'>
                <p className='truncate-all title_about_me_paragraph'>
                  {Introduction_to_Tableau_Description}
                </p>
              </font>
              <div className='certificate_provider_and_date'>
                <font className='blog_written_by_name_font'>
                  By : Simplilearn
                </font>
                <font className='blog_date_font'>
                  Date : January 2025
                </font>
              </div>
            </div>


          </div>
          <div>
            <div className='view_all_div'>
              <Link to="/certificates" className="no-highlight view_all_div">
                <font className='view_all_font'>
                  View all Certificates
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
      </div>
    </main>
  )
}

export default certificate_portfolio