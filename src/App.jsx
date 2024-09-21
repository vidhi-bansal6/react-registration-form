import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:""
  })

   

  
  const handleinput= (e)=>{
    const {name,value}=e.target;
setUser((prev)=>({...prev,[name]:value}))
}
    
    
   const handlesubmit=(event)=>{
event.preventDefault(user);
console.log(user)
   };
    


  return (
    <>
    <form onSubmit={handlesubmit}>
      <div className='container'>
        <h3>Sign up</h3>
        <p>Please fill this form to create an acoount</p>

        <label htmlFor='firstname'><b>first name</b></label>
        <input type='text' name='firstName' placeholder='Enter first name' required value={user.firstName} onChange={handleinput}></input>

        <label htmlFor='lastname'><b>last name</b></label>
        <input type='text' name='lastName' placeholder='Enter last name' required value={user.lastName} onChange={handleinput}></input>

        <label htmlFor='email'><b>email</b></label>
        <input type='email' name='email' placeholder='Enter email' required value={user.email} onChange={handleinput}></input>

        <label htmlFor='password'><b>password</b></label>
        <input type='password' name='password' placeholder='Password' required value={user.password} onChange={handleinput}></input>

        <label htmlFor='number'><b>phone no.</b></label>
        <input type='number' name='phoneNumber' placeholder='Phone number' required value={user.phoneNumber} onChange={handleinput}></input>

        <button className="submit">submit now</button>
        
      <p>hi my name is {user.firstName} {user.lastName}<br/>, my email is {user.email} ,<br/>and phone number is {user.phoneNumber}</p>
      </div>
    </form>
       
    </>
  )
}

export default App
