import '../../css/about_components/experience_about.css'
import '../../css/about_components/education_about.css'
import '../../css/home_components/projects.css'
import '../../css/portfolio_components/project_portfolio.css'
import { Link } from "react-router-dom";

import { FaUserTie } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

import cpc from '../../../assets/company_logo/cpc.webp'
import vfg from '../../../assets/company_logo/vfg.webp'
import aorta from '../../../assets/company_logo/aorta_rooms.webp'

function Experience() {
  return (
    <main>
      <div className='project_another_grand_parent'>
        <div className='services_title'>
          <font className='about_title_icon'>
            <FaUserTie />
          </font>
          <font className='services_title_text'>
            Experience
          </font>
        </div>
        <div className='project_individual_parent'>
          <div className='education_individual'>
            <div className='education_individual_child'>
              <font className='education_college_name_font'>
                Cyber Peace Corps
              </font>
              <font className='education_college_address_font'>
                Bhubaneswar, Odisha, India
              </font>
              <div>
                <img
                  src={cpc}
                  alt="college"
                  loading='lazy'
                  className='company_logo_image'
                />
              </div>
              <font className='education_college_degree_font'>
                Marketing Team Member
              </font>
              <font className='education_college_degree_duration_font'>
                Aug 2024 - Present
              </font>
            </div>
          </div>

          <div className='education_individual'>
            <div className='education_individual_child'>
              <font className='education_college_name_font'>
                Venture Foster Group
              </font>
              <font className='education_college_address_font'>
                Kolkata, West Bengal, India
              </font>
              <div>
                <img
                  src={vfg}
                  alt="college"
                  loading='lazy'
                  className='company_logo_image'
                />
              </div>
              <font className='education_college_degree_font'>
                Sales Intern
              </font>
              <font className='education_college_degree_duration_font'>
                Jun 2022 - Apr 2024
              </font>
            </div>
          </div>

          <div className='education_individual'>
            <div className='education_individual_child'>
              <font className='education_college_name_font'>
                Aorta Rooms
              </font>
              <font className='education_college_address_font'>
                Cuttak, Odisha, India
              </font>
              <div>
                <img
                  src={aorta}
                  alt="college"
                  loading='lazy'
                  className='company_logo_image'
                />
              </div>
              <font className='education_college_degree_font'>
                Marketing Intern
              </font>
              <font className='education_college_degree_duration_font'>
                Apr 2021 - Apr 2022
              </font>
            </div>
          </div>
        </div>
        <div className='education_last_part'>
          <div className='view_all_div'>
            <Link to="/experience" className="no-highlight view_all_div">
              <font className='view_all_font'>
                View all Experience
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

export default Experience;