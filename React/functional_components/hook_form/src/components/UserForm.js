import React, { useState } from  'react';

    
const UserForm = (props) => {

    const {studentList, setStudentList} = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [favStack, setFavStack] = useState("");
    const [hikingClub, setHikingClub] = useState(false);
    const [password, setPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

    
    const submitHandler = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        setStudentList([...studentList,{
            firstName: firstName,
            lastName: lastName,
            email: email,
            favStack: favStack,
            hikingClub: hikingClub,
            password: password,
            hasBeenSubmitted: hasBeenSubmitted
        }])
    };
    
    return( 
        
        <form onSubmit={ submitHandler }>
            {
                firstName.length>0&&firstName.length<2?
                <span>Your first name has to be at least 2 characters long!</span>
                :null
            }
            {
                lastName.length>0&&lastName.length<2?
                <span>Your last name has to be at least 2 characters long!</span>
                :null
            }
            {
                firstName.length>0&&firstName.length<2?
                <span>Your first name has to be at least 2 characters long!</span>
                :null
            }
            {
                email.length>0&&email.length<1?
                <span>Your email can not be empty!</span>
                :null
            }
            {
                password.length>0&&password.length<7?
                <span>Your password has to be at least 7 characters long!</span>
                :null
            }
            <div>
                <label htmlFor="firstName">First Name</label> 
                <input value={firstName} name="firstName" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label htmlFor="lsstName">Last Name</label> 
                <input value={lastName} name="lastName" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label htmlFor="email">Email</label> 
                <input value={email} name="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label htmlFor="favStack">favStack</label> 
                <select value={favStack} name="favStack" onChange={ (e) => setFavStack(e.target.value) } >
                    <option default>Select</option>
                    <option value="mern">MERN</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                </select>
            </div>
            <div>
                <label htmlFor="hikingClib">Like Hiking?</label>
                <input value={hikingClub} name="hikingClub" onChange={ (e) => setHikingClub(!hikingClub) } type="checkbocx" checked={hikingClub}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input value={password} name="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label htmlFor="password">Confirm Password</label>
                <input value={password} name="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        
    );
};
    
export default UserForm;
