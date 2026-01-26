import '../../css/about_components/about_me_about.css'

import { FaUser } from "react-icons/fa6";

import { About_Me_para_1_Description } from '../description/desctiption'
import { About_Me_para_2_Description } from '../description/desctiption'
import { About_Me_para_3_Description } from '../description/desctiption'

function about_me_about() {

  const skills = [
    { name: "Website Design", level: 70},
    { name: "UI/UX Design", level: 85},
    { name: "Architectural Design", level: 75},
    { name: "Product Design", level: 80},
    { name: "Logo Design", level: 60}
  ];

  return (
    <main>
      <div>
        <div className='services_another_grand_parent'>
          <div className='services_title'>
            <font className='about_title_icon'>
              <FaUser />
            </font>
            <font className='services_title_text'>
              About Me
            </font>
          </div>
          <div className='about_page_great_grand_parent'>
            <div className='about_page_my_description'>
              <p className='truncate-all justification'>
                <font className='title_my_description_another_font'>
                  {About_Me_para_1_Description}
                </font>
              </p>
              <p className='truncate-all justification'>
                <font className='title_my_description_another_font'>
                  {About_Me_para_2_Description}
                </font>
              </p>
              <p className='truncate-all justification'>
                <font className='title_my_description_another_font'>
                  {About_Me_para_3_Description}
                </font>
              </p>
            </div>
            <div className='skill_range_section'>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill">
                    <div className="skill-header">
                      <span className='about_me_skill_title_font'>{skill.name}</span>
                      <span className='about_me_skill_title_font'>{skill.level}%</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default about_me_about