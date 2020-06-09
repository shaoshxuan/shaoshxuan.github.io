import React from 'react';
import About from './about/about';
import WorkExp from './workExp/workExp';
import Projects from './projects/projects';
import './mainContent.css'

class MainContent extends React.Component {
    render() {
        return (
            <div>
                <About />
                <WorkExp />
                <Projects />
            </div>
        )
    }
}

export default MainContent;