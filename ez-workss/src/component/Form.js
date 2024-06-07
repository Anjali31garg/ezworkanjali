import React,{useState} from "react";
import './Form.css';


const Form = () =>{
    const [email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();

        setError('');
        setMessage('');

        if(!email){
            setError('Email is required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            setError('Invalid email format');
            return;
        }

        if(email.endsWith('@ez.works')){
            setError('Emails from @ez.works are not allowed');
            return;
        }

        try{
            const response = await fetch('http://34.225.132.160:8002/api',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            });
            if(response.status === 200){
                setMessage('Form Submitted');
            }
            else if (response.status === 422) {
                setError('Email is not allowed');
              } else {
                setError('An unexpected error occurred');
              }
            }
            catch(error){
                    setError('Network Error');
            }
        };
        return(
            <div className="form-container"> 
             <form onSubmit={handleSubmit}>
             <div className="form-group">
                <input type="email" id="email" placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}>
                </input>

             
             {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
        <button type="submit">Contact Me</button>
            </div>
             </form>
            </div>
        )
    }
    
export default Form;