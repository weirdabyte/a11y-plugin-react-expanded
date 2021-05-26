import React from 'react';

const Contact = () => {
  return (
    <div className='inputWrapper'>
      <h1>Contact Page</h1>

      <section className='inputSection'>
        <input type='text' placeholder='First name..' />
        <input type='text' placeholder='Last name..' />
        <input type='email' placeholder='Type your e-mail..' />
        <button className='submitButton'>Submit</button>
      </section>
    </div>
  );
};

export default Contact;
