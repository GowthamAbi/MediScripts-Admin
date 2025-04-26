import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../../services/authService";

const InventoryRegister =()=>{
    const navigator=useNavigate()

    const [formData,setformData]=useState({
        name:'',
        dob:'',
        phone:'',
        email:'',
        address:'',
        id:'',
        companyName:'',
        companyEmail:'',
        password:'',
        confirmPassword:''
    })

    const handleChange=async(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(formData.password!==formData.confirmPassword) {
            alert("Password Not Matched")
            return ;
        }

        try{
            const response=await api.post('/api/v1/auth/inventory/register',formData)
            console.log('Registration Success:', response.data);
            alert('Registered successfully!');
            navigator('/api/v1/auth/inventory/login')
          } catch (err) {
            console.error('Registration failed:', err);
            alert('Registration failed. Check console for details.');
          }
    }

    const regist=[
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter Name', required: true },
        { name: 'dob', label: 'Date of Birth', type: 'date', placeholder: 'Enter DOB', required: true },
        { name: 'phone', label: 'Phone', type: 'number', placeholder: 'Enter Phone', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email', required: true },
        { name: 'address', label: 'Address', type: 'text', placeholder: 'Enter Address', required: true },
        { name: 'id', label: 'E.ID', type: 'text', placeholder: 'Enter Your ID', required: true },
        { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Enter Company Name', required: true },
        { name: 'companyEmail', label: 'Company Email', type: 'email', placeholder: 'Enter Company Email', required: true },
        { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password', required: true },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm Password', required: true },
      ];
   
    return(
        <div className="bg-red-300 h-screen pt-20">
        <div className="flex flex-col items-center h-auto space-y-4 justify-center max-w-5xl  mx-auto  p-4 border rounded bg-slate-300">
            <h1 className="text-xl mb-4 font-serif font-bold">Registeration</h1>
            
            <form onSubmit={handleSubmit} className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
            {regist.map((item,index)=>(
                <div key={index} className="flex flex-col" >
                    <label htmlFor={item.name}>{item.label}
                        {item.required&&<span className="text-red-800">*</span>}
                    </label>
                    
                <input 
                name={item.name} 
                type={item.type} 
                placeholder={item.placeholder} 
                key={index} 
                value={formData[item.name]}
                onChange={handleChange}
                required={item.required}
                className="border p-2 rounded" 
                />
                </div>
            ))}   
                
            </form>
            <button type="submit" onClick={handleSubmit} className="bg-blue-600 px-8 py-4 rounded-xl font-serif text-xl font-bold text-white">Register</button>
        <div>
            
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-black">Already have an account? <a href="/inventory/login" className="text-blue-600 hover:text-blue-800">Login</a></p>
            
        </div>
        </div>
        </div>   
        
    )
}

export default InventoryRegister;