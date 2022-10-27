import React from 'react';
import './FormInput.css'
import {useState,useEffect} from 'react';
import {alphaNumericValidaion,emailValidaion,passwordValidaion,telephoneValidaion,bioValidaion} from '../Helper/validation';


function FormInput(){

    const[getGlobal,setGlobal] = useState(false);
    // on empty submission u want to show d error for that getGlobal
const[getForm,setForm] = useState({
    fullname:" ",
    lastname:" ",
    email:" ",
    password:" ",
    telephone:" ",
    bio:" ",
    
})

const[getValidation,setValidation] = useState({
    fullname:false,
    lastname:false,
    email:false,
    password:false,
    telephone:false,
    bio:false,
    // for danger 
})

useEffect(()=>{
// whenever there is change in getForm state it will call this formValidation callback.
    formValidationCheck();
// while typing itself u want to remove danger u use this

},[getForm])
console.log(getValidation);
    function onChangeHandler(event) {
        setForm({ ...getForm, [event.target.name]: event.target.value });
        //  onchange u want to update d value use this
    }
const formValidationCheck = ()=>{
    const value = {
        fullname:alphaNumericValidaion(getForm.fullname),
        lastname:alphaNumericValidaion(getForm.lastname),
        email:emailValidaion(getForm.email),
        password:passwordValidaion(getForm.password),
        telephone:telephoneValidaion(getForm.telephone),
        bio:bioValidaion(getForm.bio),
        }
    setValidation(value);
        // for validation check
}

const onSubmit = ()=>{
    formValidationCheck();
    setGlobal(true);
}



    return(<div className="from">
        <div className="form-group">
        <label >FullName:</label>
        <input type="text" name="fullname" value={getForm.fullname} onChange={onChangeHandler}/>
        </div>
       {getGlobal && getValidation.fullname &&<div className="danger">First name must be alphanumeric and contains 3-16 characters</div>}
       {/* for two way binding use value after submitting u want t delete it helps there */}
        <div className="form-group">
        <label >Lastname:</label>
        <input type="text" name="lastname" value={getForm.lastname}  onChange={onChangeHandler}/>
        </div>
       {getGlobal && getValidation.lastname && <div className="danger">Last name must be alphanumeric and contains 3-16 characters</div> } 
        <div className="form-group">
        <label >Email:</label>
        <input type="email" name="email" value={getForm.email}  onChange={onChangeHandler}/>
        </div>
        {getGlobal && getValidation.email && <div className="danger">Email must be a valid address e.g: sample@gmail.com</div>}
        <div className="form-group">
        <label >Password:</label>
        <input type="password" name="password" value={getForm.password}  onChange={onChangeHandler}/>
        </div>
       {getGlobal && getValidation.password &&<div className="danger">Password must be alphanumeric(@,-and _ are also allowed) and 
        between 6-20 characters</div>} 
        <div className="form-group">
        <label >Telephone:</label>
        <input type="number" name="telephone" value={getForm.telephone}  onChange={onChangeHandler}/>
        </div>
        {getGlobal && getValidation.telephone && <div className="danger">A valid telephone number and (11 digits 333-333-3333)</div>}
        <div className="form-group">
        <label >Your Bio:</label>
        <input type="text" name="bio" value={getForm.bio}  onChange={onChangeHandler}/>
        </div>
        {getGlobal && getValidation.bio && <div className="danger">bio must contain only lower case leters underscores,hypens,and 
        be 8-50 characters</div>} 
        <button onClick={onSubmit}>Submit</button>
        
    </div>)
}
export default FormInput;