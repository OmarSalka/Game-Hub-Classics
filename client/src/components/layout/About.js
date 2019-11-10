import React from 'react';

const About = () => {
  return (
    <div id='about'>
      <h1>About:</h1>
      <div className='about-container'>
        <div>
          <div className='bullet-point'>
            {/* <i className='fas fa-dot-circle'></i>&nbsp;&nbsp; */}
            <p>
              Stressed out and need to play a simple classical game to blow off
              some steem?
            </p>
          </div>
          <div className='hr'>
            <hr />
          </div>
          <div className='bullet-point'>
            {/* <i className='fas fa-dot-circle'></i>&nbsp;&nbsp; */}
            <p>
              Want to play in real time with a loved one, co-worker, or a
              friend?
            </p>
          </div>
          <div className='hr'>
            <hr />
          </div>
          <div className='bullet-point'>
            {/* <i className='fas fa-dot-circle'></i>&nbsp;&nbsp; */}
            <p>Want to chat in real time while playing?</p>
          </div>
          <div className='hr'>
            <hr />
          </div>
          <div className='bullet-point'>
            {/* <i className='fas fa-dot-circle'></i>&nbsp;&nbsp; */}
            <p>Then GameHub Classics is what you need!</p>
          </div>
        </div>
        <i className='fas fa-dice fa-8x'></i>
      </div>
    </div>
  );
};

export default About;
