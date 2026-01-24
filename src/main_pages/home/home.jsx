import HomeHeader from './../../components/component/header/home_header.jsx';

import TitleAndText from './../../components/component/home_components/title_image_and_text.jsx';
import PortfolioHilight from './../../components/component/home_components/portfolio_highlight.jsx';

import Services from './../../components/component/home_components/services.jsx';
import Skills from './../../components/component/home_components/skills.jsx';
import Projects from './../../components/component/home_components/projects.jsx';
import Blogs from '../../components/component/home_components/blogs.jsx';

import Footer from './../../components/component/footer/footer.jsx'


function Home() {
    return (
        <main>
            <div class="page-wrapper">
                <HomeHeader />
                <TitleAndText />
                <PortfolioHilight />
                <Services />
                <Skills />
                <Projects />
                <Blogs />
                <Footer />
            </div>

        </main>
    );
}

export default Home;

