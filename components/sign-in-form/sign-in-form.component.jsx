import {useState} from "react";

import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";


import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    // const { setCurrentUser } = useContext(UserContext);


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


  const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user);
      
    };  

    const handleSubmit = async (event) => {
        event.preventDefault(); // this is the code that will be used to prevent the default 
                                // behavior of the form submission which is to refresh the page, 
                                // and instead we will handle the form submission in our own way.

      
         try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(response);

            // setCurrentUser(user);
            resetFormFields();
       
         } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert("incorrect password or email");
            }
            console.log(error);
          
         }


    };  

// --------------------------- old code in training video -------------------------------------------------------------------

/* This code is good to have because the video shows a different way of handling the form submission but uses an out
dated form with a switch statement.  Since the video, fire base has given a different error code that is good for email and
password. but the old code is below.  */

// const handleSubmit = async (event) => {
//         event.preventDefault(); // this is the code that will be used to prevent the default 
//                                 // behavior of the form submission which is to refresh the page, 
//                                 // and instead we will handle the form submission in our own way.

      
//          try {
//             const response = await signInAuthUserWithEmailAndPassword(email, password);
//             console.log(response);
//             resetFormFields();
       
//          } catch (error) {
//             switch (error.code) {
//                 case 'auth/wrong-password':
//                     alert("incorrect password for email");
//                     break;
//                 case 'auth/user-not-found':
//                     alert("no user assicuated with this email");
//                     break;
//                 default:
//                     console.log(error);
//             }
//             console.log(error);
          
//          }


//     };  



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
            <h2>Already Have an Account?</h2>
            <span>Sign In With Email and Password</span>
            <form onSubmit={(handleSubmit)}>


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

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button> {/* sign in button is set to submit which will trigger the onSubmit handler */}
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}> Google Sign In</Button>
                </div>

            </form>
        </div>
    );
}

export default SignInForm;
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



