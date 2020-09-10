import React, {useState} from 'react';
import {useHistory, useParams} from "react-router";
import {useForm} from "react-hook-form";
import {addNewPerson, editPerson} from "../../actions/people-actions";
import {useDispatch, useSelector} from "react-redux";

import './Edit.scss';

const Edit = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const [person] = useState(useSelector(({peopleData}) => peopleData.find(person => person.id === id)) || {});
    console.log(id, person);
    const {handleSubmit, register, errors} = useForm();

    const onSubmit = data => {
        if (id) {
            dispatch(editPerson({...person, ...data}));
        } else {
            dispatch(addNewPerson(data));
        }
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='Edit'>
            <div>
                <input type="text"
                       placeholder="Name*"
                       name="name"
                       defaultValue={person.name}
                       ref={register({required: true, minLength: 2})} />
                {errors.name && errors.name.type === 'required' && <p>This field is required</p>}
                {errors.name && errors.name.type === 'minLength' && <p>Minimum length is 2 symbols</p>}
            </div>
            <div>
                <input type="tel"
                       placeholder="Mobile number*"
                       name="phone"
                       defaultValue={person.phone}
                       ref={register({required: true, minLength: 6, maxLength: 12,
                           pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g})} />
                {errors.phone && errors.phone.type === 'required' && <p>This field is required</p>}
                {errors.phone && errors.phone.type === 'minLength' && <p>Minimum length is 6 symbols</p>}
                {errors.phone && errors.phone.type === 'maxLength' && <p>Maximum length is 12 symbols</p>}
                {errors.phone && errors.phone.type === 'pattern' && <p>Wrong format</p>}
            </div>
            <div>
                <input type="text"
                       placeholder="Email*"
                       name="email"
                       defaultValue={person.email}
                       ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                {errors.email && errors.email.type === 'required' && <p>This field is required</p>}
                {errors.email && errors.email.type === 'pattern' &&  <p>Wrong format</p>}
            </div>
            <div>
                <input type="submit" value="Save" />
                <button onClick={() => history.push({pathname: '/'})}>Cancel</button>
            </div>
        </form>
    )
};

export default Edit;