import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Github = () => {
    return (
        <div className="py-3">
            <button className="btn "><FontAwesomeIcon icon={faGithub} /></button>
            <p className="text-center">Github</p>
        </div>
    );
};

export default Github;