import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router";
import Person from "../../components/Person";
import {toggleFavoritePerson} from "../../actions/people-actions";

import './Home.scss';

const Home = () => {
    const [showFavList, toggleFavList] = useState(false);
    const people = useSelector((store) => store.peopleData);
    const history = useHistory();
    const dispatch = useDispatch();

    const toggleFavorite = id => {
        dispatch(toggleFavoritePerson(id));
    };

    return (
        <div className='Home'>
            <button onClick={() => history.push({pathname: '/new'})}>Add contact</button>
            {(!!people.length &&
                <>
                    <button onClick={() => toggleFavList(!showFavList)}>
                        {showFavList ? 'Show all' : 'Show only favorites'}
                    </button>
                <div className='people-wrapper'>
                    {people.map(person => showFavList
                        ? (person.isFavorite &&
                            <Person toggleFavorite={toggleFavorite} key={person.id} person={person} />)
                        : <Person toggleFavorite={toggleFavorite} key={person.id} person={person} /> )}
                </div>
            </>)}
        </div>
    );
};

export default Home;