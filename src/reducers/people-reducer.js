import {ADD_NEW_PERSON, EDIT_PERSON, TOGGLE_FAVORITE_PERSON} from "../actions/people-actions";

const peopleReducer = (state = [], action) => {
    const {type, payload} = action;
    let index, newState;
    switch (type) {
        case ADD_NEW_PERSON:
            return [
                {
                    ...payload, isFavorite: false, id: `f ${(+ new Date()).toString(16)}`
                },
                ...state
            ];
        case EDIT_PERSON:
            index = findIndexById(payload.id, state);
            newState = [...state];
            newState[index] = {...payload};
            console.log(newState, payload, index);
            return [
                ...newState
            ];
        case TOGGLE_FAVORITE_PERSON:
            index = findIndexById(payload.id, state);
            newState = [...state];
            newState[index].isFavorite = !state[index].isFavorite;
            return [
                ...newState
            ];
        default:
            return state
    }
};

const findIndexById = (id, arr) => {
    return arr.findIndex(el => el.id === id);
};

export default peopleReducer;