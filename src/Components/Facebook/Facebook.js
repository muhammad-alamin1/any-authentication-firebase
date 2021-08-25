import './facebook.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Facebook = () => {
    return (
        <div className="py-3">
            <button className="btn"><FontAwesomeIcon icon={faFacebook} /></button>
            <p className="text-center">Facebook</p>
        </div>
    );
};

export default Facebook;