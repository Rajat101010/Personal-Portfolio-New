import '../../css/about_components/education_about.css'
import '../../css/education_components/education.css'
import '../../css/home_components/projects.css'
import '../../css/portfolio_components/project_portfolio.css'
// import { Link } from "react-router-dom";

import { FaUserGraduate } from "react-icons/fa6";

import kiit_logo from '../../../assets/college_logo/kiit.webp'
import mis_logo from '../../../assets/college_logo/mis.webp'

function Education() {
  return (
    <main>
      <div className='project_another_grand_parent'>
        <div className='services_title'>
          <font className='about_title_icon'>
            <FaUserGraduate />
          </font>
          <font className='services_title_text'>
            Education
          </font>
        </div>
        <div className='service_page_division_grand_parent'>
          <div className='education_individual_new'>
            <div className='education_individual_child'>
              <font className='education_college_name_font'>
                Kalinga Institute of Industrial Technology
              </font>
              <font className='education_college_address_font'>
                Bhubaneswar, Odisha, India
              </font>
              <div>
                <img
                  src={kiit_logo}
                  alt="college"
                  loading='lazy'
                  className='college_logo_image'
                />
              </div>
              <font className='education_college_degree_font'>
                B-Tech (CSE)
              </font>
              <font className='education_college_degree_duration_font'>
                Aug 2024 - Present
              </font>
            </div>
          </div>

          <div className='education_individual_new'>
            <div className='education_individual_child'>
              <font className='education_college_name_font'>
                Modern Indian <br /> School
              </font>
              <font className='education_college_address_font'>
                Chobhar, Kathmandu, Nepal
              </font>
              <div>
                <img
                  src={mis_logo}
                  alt="college"
                  loading='lazy'
                  className='college_logo_image'
                />
              </div>
              <font className='education_college_degree_font'>
                Hign School
              </font>
              <font className='education_college_degree_duration_font'>
                Jun 2022 - Apr 2024
              </font>
            </div>
          </div>

          <div className='education_individual_new'>
            <div className='education_individual_child'>
              <font className='education_college_name_font'>
                Modern Indian <br /> School
              </font>
              <font className='education_college_address_font'>
                Chobhar, Kathmandu, Nepal
              </font>
              <div>
                <img
                  src={mis_logo}
                  alt="college"
                  loading='lazy'
                  className='college_logo_image'
                />
              </div>
              <font className='education_college_degree_font'>
                School
              </font>
              <font className='education_college_degree_duration_font'>
                Apr 2021 - Apr 2022
              </font>
            </div>
          </div>
        </div>
        <div className='education_last_part'>
        </div>
      </div>
    </main>
  );
}

export default Education;