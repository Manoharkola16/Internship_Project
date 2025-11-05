import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEventRepeat } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
import { validatePassword } from 'val-pass';


const Register = () => {
  const[formData,setFormData]=useState({
    FirstName:"",
    LastName:"",
    email:"",
    password:"",
    Cpassword:"",
    Phone:""
  })

  const [matched,setMatched]=useState(true);
  const [errorMessage,setErrorMessage]=useState("");
   
  const handleChange=(e)=>{
    let {name,value}=e.target
    if(name==="password"){
      let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8);
      validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage());
      if (value===""){
        setErrorMessage("");
      }
      if (name === "Cpassword") {
    setMatched(value === formData.password);
  }
    }
    setFormData((PreVal)=>({...PreVal,[name]:value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let {FirstName,LastName,email,password,Cpassword,Phone}=formData;
    if(!FirstName || !LastName || !email || !password || !Cpassword || !Phone){
      toast.error("All fields are mandatory")
      return
    }
    let {validateAll,getAllValidationErrorMessage}=validatePassword(password);
    if(!validateAll){
      let errorMessage=getAllValidationErrorMessage();
      toast.error(errorMessage);
    }
    if(!matched){
      toast.error("Password and Confirm Password must be same")
      return
    }
  }

  const handleCheckPassword=(e)=>{
    let {value}=e.target
    formData.password!=value ?setMatched(false):setMatched(true);
    value==="" && setMatched(true);
  }


  return (
    <div className=' bg-[url("/public/image/registerimage.jpeg")] bg-cover  flex justify-end items-center ] overflow-hidden min-h-screen relative' >
      <form action="" className='w-1/2 min-height-screen flex justify-items-end items-center flex-col gap-8 px-[100px] py-100 max-sm:w-[10%] shadow-xs absolute left-150 ' onSubmit={handleSubmit}>
        <div className='font-[900] text-2xl font-semibold flex justify-center items-center '>
          <h1>Create Your Account</h1>
        </div>

        <div className='border-2 flex  items-center w-full rounded-md px-5 py-2 h-full'>
          <input type="text" name='FirstName' id="" placeholder='FirstName'  className='w-full outline-none px-4' onChange={handleChange}/>
          <span><CgNametag /></span>
        </div>

        <div className='border-2 flex  items-center w-full rounded-md px-5 py-2'>
          <input type="text" name='LastName' id="" placeholder='LastName' className='w-full outline-none px-4 ' onChange={handleChange} />
          <span><CgRename /></span>
        </div>

        <div className='border-2 flex  items-center w-full rounded-md px-5 py-2'>
          <input type="email" name='email'  id="" placeholder='Email'  className='w-full outline-none px-4 ' onChange={handleChange}/>
          <span><MdAlternateEmail /></span>
        </div>

        <div className='border-2 flex  items-center w-full rounded-md px-5 py-2'>
          <input type="password" name='password' id="" placeholder='Password'  className='w-full outline-none px-4 ' onChange={handleChange}/>
          <span><RiLockPasswordLine /></span>
        </div>

        <div className={errorMessage?'w-full flex justify-center items-center px-3 rounded-sm':'hidden'}>
          <span className='text-red-700'>*{errorMessage}</span>
        </div>

        <div className='border-2 flex  items-center w-full rounded-md px-5 py-2'>
          <input type="password" name="Cpassword" id="" placeholder='Confirm Password'  className={`w-full outline-none px-4 ${matched?'border-black':'border-red-700'}`}  onChange={handleCheckPassword} />
          <span><MdEventRepeat /></span>
        </div>

        <div className='border-2 flex  items-center w-full rounded-md px-5 py-2'>
          <input type="tel" name='Phone' placeholder='Phone Number'  className='w-full outline-none px-4 ' onChange={handleChange}/>
          <span><FaPhoneAlt /></span>
        </div>

        <div className='border-2 flex  items-center w-full rounded-md px-5 py-2 flex items-center justify-center bg-black text-white hover:bg-gray-700 cursor-pointer'>
          <input type="submit" value="submit" className='text-white font-bold text-md tracking-widest w-full outline-0'  />
        </div>
       
      </form>
    </div>
  )
}

export default Register