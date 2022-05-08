import React,{useState} from 'react'
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Login.css'

const Login = () => {

  const [credential,setcredential] = useState({email:'',password:''});
  const [formValues,setFormValues] = useState(credential)
  const [formErrors,setFormErrors] = useState({})
  const [backendErrors,setBackendErrors] = useState()
  const [isSubmit,setIsSubmit] = useState(false);

  // const handleClick = async()=>{
  //   const response = await fetch(`http://localhost:5000/api/auth/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({email:formValues.email,password:formValues.password})
  //   });
  //   const json = await response.json();
  //   let {error} = json 
  //   console.log(error)
  //   console.log(backendErrors);
  //   if(json.success){
  //     localStorage.setItem('token',json.authToken);
  //     history.push('/');

  //   }
  //   else{
  //     setBackendErrors(error)
  //     setFormErrors(validate(formValues));
  //     setIsSubmit(true)
  //   }
  // }

  const handleChange  = (e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
    // setFormErrors(validate(formValues));

  }

  // const validate = (values)=>{
  //   const errors = {};
  //   const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if(!values.email){
  //     errors.email = "email cannot be empty"
  //   }
  //   else if (!regex.test(values.email)){
  //     errors.email = "Invalid email"
  //   }
  //   else if(backendErrors){
  //     errors.password = backendErrors;
  //   }
  //   if(!values.password){
  //     errors.password = "password cannot be empty"
  //   }

  //   return errors;
  // }

  // useEffect(()=>{
  //   if(Object.keys(formErrors).length === 0 && isSubmit){
  //     console.log(formValues);
  //   }
  // },[formErrors])
  return (
    <div className='login'>
      <div className="login-box">
        <h2>Login</h2>
          <form method="post">
            <div className="login-form">
              <div className="input-box">
                <div className="input-box1">
                  {/* <EmailIcon className='log-icon'/> */}
                  <i class="fa-solid fa-envelope"></i>
                  <input type="text" placeholder='Enter your email' name='email' onChange={handleChange} value={formValues.email}/>
                </div>
                <p>{formErrors.email}</p>
              </div>
              <div className="input-box">
                <div className="input-box1">
                  <i class="fa-solid fa-lock"></i>
                  <input type='password' placeholder='Enter your password' name='password' onChange={handleChange}  value={formValues.password}/>
                </div>
                <p>{formErrors.password}</p>
              </div>
              <div className="button-box">
                <button className='btn1'  type="button">Login</button>
              </div>

              <p>Don't have an account? <Link className="lis" to="/signup">Signup now</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
