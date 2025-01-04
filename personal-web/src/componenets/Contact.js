import React from 'react'
import './Contact.scss'


function Contact() {
  return (
    <section id='contacts'>
      <h2>Contact Me</h2>

      <div className='container contactContainer'>
        <div className='contactOptions'>
          <article className='contact_option'>
            <h4>Email</h4>
            <h5>Brandonkemboi87@gmail.com</h5>
            <a href='mailto:Brandonkemboi87@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <h4>LinkedIn</h4>
            <a href='https://linkedin.com/in/brandonkemboi' target= '_blank'>Send a message</a>
          </article>

        </div>
        <form action='https://formspree.io/f/xlezoljv' method='POST'>
          <input type= 'text' name='name' placeholder='Your Full Name' required />
          <input type= 'email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder = 'Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact