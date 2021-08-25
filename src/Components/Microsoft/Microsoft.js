import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const Microsoft = () => {
    return (
        <div className="py-3">
            <button  className="btn"><FontAwesomeIcon icon={faMicrosoft} /></button>
            <p className="text-center">Microsoft</p>
        </div>
    );
};

export default Microsoft;