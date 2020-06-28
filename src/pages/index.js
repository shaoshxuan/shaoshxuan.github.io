import React from "react";
import SplashScreen from "../components/splashScreen/splashScreen";
import PageLayout from "../components/pageLayout/pageLayout";
import Landing from "../components/mainContent/landing/landing";
import MainContent from "../components/mainContent/mainContent";
import Head from '../components/head.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fab, fas);

class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {
            contentClass: false,
        }

        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        this.handleLoad();
    }

    handleLoad = () => {
        if (window.sessionStorage.getItem('showLanding') == null){
            window.sessionStorage.setItem('showLanding', "landindOnly");
            setTimeout(
                function() {
                    this.setState({
                        contentClass: true,
                    });
                }
                .bind(this),
                5000
            );
        } else {
            this.setState({
                contentClass: true,
            });
        }
    }
    
    render() {
        return (
            <>
                <Head title="Home"/>
                <SplashScreen />
                <Landing />
                {this.state.contentClass
                    ?   <PageLayout>
                            <MainContent />
                        </PageLayout>
                    :   <>
                        </>
                }
                    
                
            </>
        )
    }
}

export default IndexPage;
