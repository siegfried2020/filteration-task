import {React, useState} from 'react';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


////////////////////////////////
////////////////////////////////
// Contact Us


const Icon = ({icon, color}) => {
  return <FontAwesomeIcon icon={icon} color={color} /> ;
};


function Button({className, children}){

  return (
  <div className='centerized'>
    <button className={className}>{children}</button>
  </div>
  )
  
}


export default function Contact_Us(){
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  
  const [responseMessage, setResponseMessage] = useState('');
   async function handleSubmit(e){
    e.preventDefault();
    try {
      // Obviously this won't work due to the Cross-Origin Request being 
      // blocked, but it was implemented for completeness' sake
      const response = await fetch('http://upskilling-egypt.com:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(name, email, phoneNumber),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage('Message sent successfully!');
        // Clear form
        setName('');
        setEmail('');
        setPhoneNumber('')
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  }

  return(
    
    <section className='contact-us' >
  
      <h1 className='margin-top-contact three-times-header'>Contact Us</h1>
      
      <div className='form-info grid-template-2'>

        <form className='form grid-template-column-1' onSubmit={handleSubmit}>
          <input type='text' value={name} 
          placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
          
          <input type='email' value={email} 
          placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
          
          <input type='text' value={phoneNumber} 
          placeholder='Phone' onChange={(e)=>setPhoneNumber(Number(e.target.value))}/>
          
          <Button className={'contact-button'}>Send</Button>
        </form>
        
        <div className='info'>
          <p>
            <Icon icon={faEnvelope}  color='blue'/>
            <span>upskilling.eg1@gmail.com</span>
          </p>

          <p>
            <Icon icon={faPhone} color='blue'/>
            <span>+20 115 493 2137</span>
          </p>
        </div>

      </div>
      <footer className='contact-us-footer'></footer>
    </section>
  )
}