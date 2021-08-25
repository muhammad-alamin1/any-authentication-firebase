import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYahoo } from '@fortawesome/free-brands-svg-icons';

const Yahoo = () => {
    return (
        <div className="py-3">
            <button  className="btn"><FontAwesomeIcon icon={faYahoo} /></button>
            <p className="text-center">Yahoo</p>
        </div>
    );
};

export default Yahoo;