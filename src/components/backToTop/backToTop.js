import React from 'react';
import './backToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BackToTop extends React.Component {
    render() {
        return (
            <div className="backToTop top">
                <a href="#home"><FontAwesomeIcon icon={['fas', 'chevron-circle-up']} /></a>
            </div>
        )
    }
}

export default BackToTop;