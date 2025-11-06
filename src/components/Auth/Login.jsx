import React from 'react'
import { useState } from 'react'
const Login = ({handleLogin}) => {
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()   
        handleLogin(email,password)
        //console.log("email is",email)
        //console.log("password is",password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'> 
    <div className='border-2 p-20 border-emerald-600 rounded-xl '> 
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
             <input
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
             }}
             required className="bg-transparent border-2 outline-none placeholder:text-gray-400 text-black text-xl border-emerald-600 rounded-full py-3 px-5 " type="email" placeholder='Enter your email' /> 
             <input 
             value={password}
             onChange={(e)=>{
              setPassword(e.target.value)
             }}
             required className="bg-transparent border-2 mt-3 outline-none placeholder:text-gray-400 text-black text-xl border-emerald-600 rounded-full py-3 px-5" type="password" placeholder='Enter your password here' />
     <button className="mt-5 border-2 outline-none placeholder:text-gray-400 text-white text-xl bg-emerald-600 rounded-full py-3 px-5">Log in</button>
      </form>
       </div>
        </div>
  )
}

export default Login