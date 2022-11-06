import React from 'react'
import './contact.css';
import './App.css';
import zuri from './img/Zuri.Internship_Logo.svg'
import I4G from './img/I4G.svg'


export default function 
() {
    const name = "Jo_Na_Than"
  return (
    <body>
        <section className='contact'>
            <div className='first-section'>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <form>
                <div className='first-inputs'>
                    <div>
                        <label>First Name</label>
                        <input type="text" placeholder='Enter your first name' id='first_name' required />
                    </div>
                    <div className='last-name'>
                        <label>Last Name</label>
                        <input type="text" placeholder='Enter your last name' id='last_name' required />
                    </div>
                </div>

                <label>Email</label>
                <input type="email" placeholder='yourname@email.com' id='email' required />

                
                <label>Message</label>
                <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message' required ></textarea>

               <div className='check-span'>
                    <input type="checkbox" id='checkbox'  required />
                    <span>You agree to providing your data to {name} who may contact you.</span>
               </div>
                <input type="submit" id='btn__submit' value="Send message" />
            </form>

         
        </section>
        <hr></hr>
      <footer>
      <a href=""><img src={zuri} alt="Logo" id="profile__img" /></a>
      <p>HNG Internship 9 Frontend Task</p>
      <a href=""><img src={I4G} alt="Logo" id="profile__img" /></a>
      </footer>
    </body>
  )
}

