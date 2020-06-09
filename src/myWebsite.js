import React from 'react';
import SplashScreen from './components/splashScreen/splashScreen';
import BackToTop from './components/backToTop/backToTop';
import NavBar from './components/navBar/navBar';
import Landing from './components/landing/landing';
import MainContent from './components/mainContent/mainContent';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class MyWebsite extends React.Component {
    render() {
        return (
            <div>
                <SplashScreen />
                <BackToTop />
                <header>
                    <NavBar />
                </header>
                <Landing/>
                <div className="content">
                    <MainContent />
                    <Contact />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default MyWebsite;