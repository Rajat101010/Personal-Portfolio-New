import PortfolioHeader from '../../components/component/header/portfolio_header.jsx';

import PortfolioProjectsComponents from '../../components/component/portfolio_components/project_portfolio.jsx';
import PortfolioCertificatesComponents from '../../components/component/portfolio_components/certificate_portfolio.jsx';

import Footer from '../../components/component/footer/footer.jsx'


function Portfolio() {
    return (
            <main>
                <PortfolioHeader />
                <PortfolioProjectsComponents />
                <PortfolioCertificatesComponents />
                <Footer />

            </main>
    );
}

export default Portfolio;

