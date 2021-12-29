import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NoTodoFound = () => {
    return (
        <p className='bg-warning p-3'>
            <FontAwesomeIcon icon={faInfoCircle} />
            &nbsp; &nbsp;
            Sorry, No todo found. Please, create one.
        </p>
    );
};

export default NoTodoFound;