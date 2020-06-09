import React from 'react';
import Particles from 'react-particles-js';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Landing extends React.Component {
    render() {
        return (
            <div className="landing" id="home">
                <Particles 
                    params={{
                        "particles": {
                            "number": {
                                "value": 200
                            },
                            "color": {
                                "value": "#66fcf1"
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false
                            },
                            "size": {
                                "value": 2
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#e41376",
                                "opacity": 0.25,
                                "width": 1
                            },
                            "move": {
                                "speed": 1
                            },
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "grab": {
                                    "distance": 200
                                },
                                "bubble": {
                                    "distance": 150,
                                    "size": 50,
                                    "duration": 0.3
                                },
                                "push": {
                                    "particles_nb": 5
                                }
                            }
                        }
                    }}
                    className="particles"
                />

                <div className="introContainer">
                    <div className="landingHeader">
                        I DESIGN AND BUILD
                    </div>
                    <div className="landingTitle">
                        <span style={{color: 'var(--landingBodyTextColor)'}}>—</span> WEBSITES <span style={{color: 'var(--landingBodyTextColor)'}}>—</span><br/>
                        <span style={{color: 'var(--landingBodyTextColor)'}}>—</span> MOBILE APPS <span style={{color: 'var(--landingBodyTextColor)'}}>—</span>
                    </div>
                    <div className="landingBreak"></div>
                    <div className="landingBody">
                        I am <span style={{ color: "var(--contrastColor)", fontSize: "1.4rem",fontWeight: "600" }}>Shao Shxuan</span>, a junior developer located in Singapore.<br/>
                        With passion in design and development, I strive to bring your web and mobile app ideas to life!
                    </div>
                    <div className="landingBreak"></div>
                    <div className="headerIconLinks">
                        <a href="https://www.linkedin.com/in/shaoshxuanchua/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        <a href="https://github.com/shaoshxuan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                        <a href="https://codepen.io/shaoshxuan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
                        <a href="https://www.instagram.com/shaoshxuan/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    </div>
                    <div className="landingBreak"></div>
                    <div className="landingSub">
                        "Perfection is no small thing, but it is made up of small things"
                    </div>
                    <div className="startView">
                        <a href="#about"><FontAwesomeIcon icon={['fas', 'angle-double-down']} /></a>
                    </div>
                </div>
                <div className="sepBar"></div>
            </div>
        )
    }
}

export default Landing;