import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from "react-router";
import './Person.scss';

const Person = ({person, toggleFavorite}) => {
    const history = useHistory();
    const {id, name, phone, email, isFavorite} = person;

    return (
        <div className='Person'>
            <div>Name: {name}</div>
            <div>Phone: {phone}</div>
            <div>Email: {email}</div>
            <div>
                <button onClick={() => toggleFavorite(id)}>
                    {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
                </button>
                <button onClick={() => history.push(`edit/${id}`)}>Edit</button>
            </div>

        </div>
    );
};

Person.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
    }),
    toggleFavorite: PropTypes.func.isRequired
};

export default Person;