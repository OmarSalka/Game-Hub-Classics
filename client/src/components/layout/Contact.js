import React from 'react';

const Contact = () => {
  return (
    <div id='about-n-contact'>
      <h1>Contact:</h1>
      <div className='about-n-contact-container'>
        <i className='fas fa-dice fa-8x'></i>
        <div>
          <div className='bullet-point'>
            <p>
              Enjoying our Classic Game Hub thus far and would like to play a
              round with the owner?
            </p>
          </div>
          <div className='hr'>
            <hr />
          </div>
          <div className='bullet-point'>
            <p>Want to report a bug?</p>
          </div>
          <div className='hr'>
            <hr />
          </div>
          <div className='bullet-point'>
            <p>Requesting a new feature?</p>
          </div>
          <div className='hr'>
            <hr />
          </div>
          <div className='bullet-point'>
            <p>Feel free to reach out!</p>
          </div>
          <div className='hr'>
            <hr />
          </div>
          <div className='bullet-point'>
            <p>Feel free to reach out!</p>
          </div>
          <div className='contact-icons'>
            <a href='https://github.com/OmarSalka' target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-code-branch fa-2x'></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='https://www.linkedin.com/in/omarsalka/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='mailto:omarsalka9@gmail.com'>
              <i className='fas fa-envelope fa-2x'></i>
            </a>
          </div>
        </div>
        {/* <i className='fas fa-dice fa-8x'></i> */}
      </div>
    </div>
  );
};

export default Contact;
