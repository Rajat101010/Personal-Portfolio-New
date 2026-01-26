import AboutHeader from '../../components/component/header/about_header.jsx';

import AboutMeComponents from '../../components/component/about_components/about_me_about.jsx';
import ExperienceComponents from '../../components/component/about_components/experience_about.jsx';
import EducationComponents from '../../components/component/about_components/education_about.jsx';

import Footer from '../../components/component/footer/footer.jsx'


function About() {
    return (
            <main>
                <AboutHeader />
                <AboutMeComponents />
                <ExperienceComponents />
                <EducationComponents />
                <Footer />

            </main>
    );
}

export default About;

