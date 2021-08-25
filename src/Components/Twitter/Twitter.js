import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Twitter = () => {
    return (
        <div className="py-3">
            <button className="btn "><FontAwesomeIcon icon={faTwitter} /></button>
            <p className="text-center">Twitter</p>
        </div>
    );
};

export default Twitter;