export const ADD_NEW_PERSON = 'ADD_NEW_PERSON';
export const EDIT_PERSON = 'EDIT_PERSON';
export const TOGGLE_FAVORITE_PERSON = 'TOGGLE_FAVORITE_PERSON';

export const addNewPerson = person => ({
    type: ADD_NEW_PERSON,
    payload: person
});

export const editPerson = person => ({
    type: EDIT_PERSON,
    payload: person
});

export const toggleFavoritePerson = id => ({
    type: TOGGLE_FAVORITE_PERSON,
    payload: {id}
});