import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const Apple = () => {
    return (
        <div className="py-3">
            <button  className="btn"><FontAwesomeIcon icon={faApple} /></button>
            <p className="text-center">Apple</p>
        </div>
    );
};

export default Apple;