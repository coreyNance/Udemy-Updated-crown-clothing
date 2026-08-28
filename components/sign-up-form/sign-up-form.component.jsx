import {useState} from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";


import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    // const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // this is the code that will be used to prevent the default 
                                // behavior of the form submission which is to refresh the page, 
                                // and instead we will handle the form submission in our own way.

        if (password !== confirmPassword) {
            alert("passwords do not match"); // another way to check for email and password like 
                                            //length on the input section.
            return;
        }
      
         try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            // setCurrentUser(user);

            await createUserDocumentFromAuth(user, {displayName});

            resetFormFields(); // this is the code that will be used to reset the form fields to their default values after the user has been created successfully.

         } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.log("error creating the user", error.message);
            }
         }


    };  

    //because there is overlap between name and values this short hand is able
    // to be used to update the form fields state. The name of the input field is used 
    // as the key and the value of the input field is used as the value in the formFields state object.
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        
        <div className="sign-up-container">
            {/* This is the sign up form container */}
            <h2>Don't Have an Account?</h2>
            <span>Sign Up With Email and Password</span>
            <form onSubmit={(handleSubmit)}>
            
                <FormInput
                    label="Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}/>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button> {/* sign up button is set to submit which will trigger the onSubmit handler */}
            </form>
        </div>
    );
}

export default SignUpForm;
//                     value={email}/>

//                 <label>Password</label>
//                 <input 
//                     type="password" 
//                     required 
//                     onChange={handleChange} 
//                     name="password" 
//                     value={password}/>

//                 <label>Confirm Password</label>
//                 <input 
//                     type="password" 
//                     required 
//                     onChange={handleChange} 
//                     name="confirmPassword" 
//                     value={confirmPassword}/>

//                 <button type="submit">Sign Up</button> 
//             </form>
//         </div>
//     );
// }



