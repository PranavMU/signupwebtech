import { useState } from 'react';

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [gender,setgender] = useState('');
const [phone,setphoneNumber ] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [valname,setvalname] = useState(false);
const [valemail,setvalemail] = useState(false);
const [valphone,setvalphone] = useState(false);
const [valpass,setvalpass] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
    
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

const handlegender =  (e) => {
	setgender(e.target.value);
	setSubmitted(false);
};

const handlephone = (e) => {
	setphoneNumber(e.target.value);
	setSubmitted(false);
}
// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};
function sliceed(){
    let idx = email.indexOf('@')
    let web = email.slice(0,idx)
    console.log(web,idx)
    return web
}

function isANumber(str){
    return !/\d/.test(str);
  }
// Handling the form submission
function containsNumbers(str) {
    return /\d/.test(str);
  }
const handleSubmit = (e) => {
	e.preventDefault();
    // console.log(email.includes("@"))
	if (name === '' || email === '' || password === '' || phone === '') {
	setError(true);
	}if(containsNumbers(name)){
        
       setvalname(true)
       setSubmitted(false)
    }if(password.length <= 6){
        setvalpass(true)
        setSubmitted(false)
    }
    if(isANumber(phone)){
       setvalphone(true)
       setSubmitted(false)
    }if(!email.includes('@')){
        setvalemail(true)
        setSubmitted(false)
    }else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Hello {sliceed()}  !!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};
const errorname = () => {
	return (
	<div
		className="valname"
		style={{
		display: valname? '' : 'none',
		}}>
		<h1>Name is not alphanumeric</h1>
	</div>
	);
};
const errorphone = () => {
	return (
	<div
		className="valphone"
		style={{
		display: valphone? '' : 'none',
		}}>
		<h1>Phone Number must contain only numbers</h1>
	</div>
	);
};
const errorpass = () => {
	return (
	<div
		className="valpass"
		style={{
		display: valpass? '' : 'none',
		}}>
		<h1>Password must contain atleast 6 letters</h1>
	</div>
	);
};
const erroremail = () => {
	return (
	<div
		className="valemail"
		style={{
		display: valemail? '' : 'none',
		}}>
		<h1>Email must contain @ </h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Signup</h1>
	</div>


	<div className="messages">
		{errorMessage()}
        {errorname()}
		{successMessage()}
        {errorphone()}
        {errorpass()}
        {erroremail()}

	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Email address</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

        <label className="label">Gender</label>
        <select defaultValue = "1" onChange={handlegender}>
          <option value="1" >Male</option>
          <option value="2" >Female</option>
        </select>

        <label className="label"> Phone Number</label>
		<input onChange={handlephone} className="input"
		value={phone} type="text" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
