import './form-input.styles.scss';
              
              
              // Instead of using changeHandler and value props, and because we know what they are already,
                // using ...otherProps will allow us to pass in any other props that we want to use in the input 
                // field without having to explicitly define them in the component. This makes the component more flexible and reusable.
const FormInput = ({label, ...otherProps}) => {   
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (
                <label className= {`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
            {/* <input className="form-input" {...otherProps} /> This input string was here but due to the css selector  &:focus ~ .form-input-label 
            The input was not a sibling so it was moved to just under class group div. This allows the css to target it properly */} 
        </div>

    )
}


export default FormInput;


/* we could also create object for input to be more explicit but because only one person is using this application its done this way but the ob would look like

<FormInput
    label="Display Name"
    inputOptions={{
        type="text",
        required: true,
        onChange={handleChange},
        name="displayName",
        value={displayName}
    }}
/>

Then in form-input.component.jsx we would have to change the input to be <input className="form-input" {...inputOptions} /> instead of {...otherProps} and then we would have to change the label to be {label && (
                <label className= {`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )*/