import '../../css/home_components/projects.css'
import '../../css/portfolio_components/project_portfolio.css'
import '../../css/projects_components/projects.css'
// import { Link } from "react-router-dom";

import { FaGear } from "react-icons/fa6";

import air_runner from '../../../assets/projects_images/1.webp'
import kp_26_hub from '../../../assets/projects_images/2.webp'
import fly_high from '../../../assets/projects_images/3.webp'
import barber_1 from '../../../assets/projects_images/4.webp'
import flavora from '../../../assets/projects_images/5.webp'
import barber_2 from '../../../assets/projects_images/6.webp'

import { AirRunner_Description } from '../description/desctiption'
import { KP_26_Hub_Description } from '../description/desctiption'
import { Fly_High_Description } from '../description/desctiption'
import { Barber_Portfolio_Description } from '../description/desctiption'
import { Flavora_Description } from '../description/desctiption'
import { Barber_Shop_Description } from '../description/desctiption'

function Projects() {
  return (
    <main>
      <div className='project_another_grand_parent_another'>
        <div className='services_title'>
          <font className='services_title_icon'>
            <FaGear />
          </font>
          <font className='services_title_text'>
            My Projects
          </font>
        </div>
        <div className='project_individual_parent_another'>
          <div className='project_individual_another'>
            <div>
              <img
                src={air_runner}
                alt="project"
                className='project_individual_pic'
                loading='lazy' />
            </div>
            <div className='project_individual_text_part'>
              <font className='skills_individual_div_description'>
                <div className='skills_individual_div_parent_parent'>
                  <div className='skills_individual_div_child'>
                    React.js
                  </div>
                  <div className='skills_individual_div_child'>
                    HTML
                  </div>
                  <div className='skills_individual_div_child'>
                    CSS
                  </div><div className='skills_individual_div_child'>
                    Canva
                  </div>
                  <div className='skills_individual_div_child'>
                    PixelLab
                  </div>
                  <div className='skills_individual_div_child'>
                    Git
                  </div>
                  <div className='skills_individual_div_child'>
                    GitHub
                  </div>
                  <div className='skills_individual_div_child'>
                    VScode
                  </div>
                  <div className='skills_individual_div_child'>
                    Vercel
                  </div>
                </div>
              </font>
              <div>
                <font className='skills_title_font'>
                  Airline Website - Air Runner
                </font>
                <font className='services_description_description_font'>
                  <p className='truncate-2 title_about_me_paragraph'>
                    {AirRunner_Description}
                  </p>
                </font>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer" href="https://air-runner.vercel.app/" className="no-highlight">
                <div className='service_learn_more'>
                  <div className='view_page_buttom'>
                    <font className='service_learn_more_font'>
                      View Page
                    </font>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='project_individual_another'>
            <div>
              <img
                src={kp_26_hub}
                alt="project"
                className='project_individual_pic'
                loading='lazy' />
            </div>
            <div className='project_individual_text_part'>
              <font className='skills_individual_div_description'>
                <div className='skills_individual_div_parent_parent'>
                  <div className='skills_individual_div_child'>
                    React.js
                  </div>
                  <div className='skills_individual_div_child'>
                    HTML
                  </div>
                  <div className='skills_individual_div_child'>
                    CSS
                  </div><div className='skills_individual_div_child'>
                    Canva
                  </div>
                  <div className='skills_individual_div_child'>
                    PixelLab
                  </div>
                  <div className='skills_individual_div_child'>
                    Git
                  </div>
                  <div className='skills_individual_div_child'>
                    GitHub
                  </div>
                  <div className='skills_individual_div_child'>
                    VScode
                  </div>
                  <div className='skills_individual_div_child'>
                    Vercel
                  </div>
                </div>
              </font>
              <div>
                <font className='skills_title_font'>
                  Hostel Web App - KP-26 Hub
                </font>
                <font className='services_description_description_font'>
                  <p className='truncate-2 title_about_me_paragraph'>
                    {KP_26_Hub_Description}
                  </p>
                </font>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer" href="https://kp-26-hub.vercel.app/" className="no-highlight">
                <div className='service_learn_more'>
                  <div className='view_page_buttom'>
                    <font className='service_learn_more_font'>
                      View Page
                    </font>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='project_individual_another'>
            <div>
              <img
                src={fly_high}
                alt="project"
                className='project_individual_pic'
                loading='lazy' />
            </div>
            <div className='project_individual_text_part'>
              <font className='skills_individual_div_description'>
                <div className='skills_individual_div_parent_parent'>
                  <div className='skills_individual_div_child'>
                    HTML
                  </div>
                  <div className='skills_individual_div_child'>
                    CSS
                  </div>
                  <div className='skills_individual_div_child'>
                    JavaScript
                  </div>
                  <div className='skills_individual_div_child'>
                    Canva
                  </div>
                  <div className='skills_individual_div_child'>
                    PixelLab
                  </div>
                  <div className='skills_individual_div_child'>
                    Git
                  </div>
                  <div className='skills_individual_div_child'>
                    GitHub
                  </div>
                  <div className='skills_individual_div_child'>
                    VScode
                  </div>
                </div>
              </font>
              <div>
                <font className='skills_title_font'>
                  Airline Website - Fly High
                </font>
                <font className='services_description_description_font'>
                  <p className='truncate-2 title_about_me_paragraph'>
                    {Fly_High_Description}
                  </p>
                </font>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer" href="https://rajat101010.github.io/Fly-High-Airline/index.html" className="no-highlight">
                <div className='service_learn_more'>
                  <div className='view_page_buttom'>
                    <font className='service_learn_more_font'>
                      View Page
                    </font>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='project_individual_another'>
            <div>
              <img
                src={barber_2}
                alt="project"
                className='project_individual_pic'
                loading='lazy' />
            </div>
            <div className='project_individual_text_part'>
              <font className='skills_individual_div_description'>
                <div className='skills_individual_div_parent_parent'>
                  <div className='skills_individual_div_child'>
                    React.js
                  </div>
                  <div className='skills_individual_div_child'>
                    HTML
                  </div>
                  <div className='skills_individual_div_child'>
                    CSS
                  </div><div className='skills_individual_div_child'>
                    Canva
                  </div>
                  <div className='skills_individual_div_child'>
                    PixelLab
                  </div>
                  <div className='skills_individual_div_child'>
                    Git
                  </div>
                  <div className='skills_individual_div_child'>
                    GitHub
                  </div>
                  <div className='skills_individual_div_child'>
                    VScode
                  </div>
                  <div className='skills_individual_div_child'>
                    Vercel
                  </div>
                </div>
              </font>
              <div>
                <font className='skills_title_font'>
                  Barber Portfolio
                </font>
                <font className='services_description_description_font'>
                  <p className='truncate-2 title_about_me_paragraph'>
                    {Barber_Portfolio_Description}
                  </p>
                </font>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer" href="https://anish-peach.vercel.app/" className="no-highlight">
                <div className='service_learn_more'>
                  <div className='view_page_buttom'>
                    <font className='service_learn_more_font'>
                      View Page
                    </font>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='project_individual_another'>
            <div>
              <img
                src={flavora}
                alt="project"
                className='project_individual_pic'
                loading='lazy' />
            </div>
            <div className='project_individual_text_part'>
              <font className='skills_individual_div_description'>
                <div className='skills_individual_div_parent_parent'>
                  <div className='skills_individual_div_child'>
                    React.js
                  </div>
                  <div className='skills_individual_div_child'>
                    HTML
                  </div>
                  <div className='skills_individual_div_child'>
                    CSS
                  </div><div className='skills_individual_div_child'>
                    Canva
                  </div>
                  <div className='skills_individual_div_child'>
                    PixelLab
                  </div>
                  <div className='skills_individual_div_child'>
                    Git
                  </div>
                  <div className='skills_individual_div_child'>
                    GitHub
                  </div>
                  <div className='skills_individual_div_child'>
                    VScode
                  </div>
                  <div className='skills_individual_div_child'>
                    Vercel
                  </div>
                </div>
              </font>
              <div>
                <font className='skills_title_font'>
                  Food Menu Websitev - Flavora
                </font>
                <font className='services_description_description_font'>
                  <p className='truncate-2 title_about_me_paragraph'>
                    {Flavora_Description}
                  </p>
                </font>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer" href="https://flavora-delta.vercel.app/" className="no-highlight">
                <div className='service_learn_more'>
                  <div className='view_page_buttom'>
                    <font className='service_learn_more_font'>
                      View Page
                    </font>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='project_individual_another'>
            <div>
              <img
                src={barber_1}
                alt="project"
                className='project_individual_pic'
                loading='lazy' />
            </div>
            <div className='project_individual_text_part'>
              <font className='skills_individual_div_description'>
                <div className='skills_individual_div_parent_parent'>
                  <div className='skills_individual_div_child'>
                    HTML
                  </div>
                  <div className='skills_individual_div_child'>
                    CSS
                  </div>
                  <div className='skills_individual_div_child'>
                    JavaScript
                  </div>
                  <div className='skills_individual_div_child'>
                    Canva
                  </div>
                  <div className='skills_individual_div_child'>
                    PixelLab
                  </div>
                  <div className='skills_individual_div_child'>
                    Git
                  </div>
                  <div className='skills_individual_div_child'>
                    GitHub
                  </div>
                  <div className='skills_individual_div_child'>
                    VScode
                  </div>
                </div>
              </font>
              <div>
                <font className='skills_title_font'>
                  Barber Shop Website
                </font>
                <font className='services_description_description_font'>
                  <p className='truncate-2 title_about_me_paragraph'>
                    {Barber_Shop_Description}
                  </p>
                </font>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer" href="https://rajat101010.github.io/Anish-Barber/" className="no-highlight">
                <div className='service_learn_more'>
                  <div className='view_page_buttom'>
                    <font className='service_learn_more_font'>
                      View Page
                    </font>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;