import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div style={{ fontSize: "1.2rem", }}>
                    Shao Shxuan | Junior Developer
                </div>
                <div className="doneBy">
                    Developed by [ Shao Shxuan ] &copy; 2020
                </div>
            </div>
        )
    }
}

export default Footer;