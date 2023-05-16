import React from 'react';
const About = () =>
{
  return (
    <>
    <div className='about-banner'>
      <div className='container'>
        <div className='row'>
        <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className='mobile-banner-left'>
              <h3 className='mobile-text'>A Leading Product<br/><strong>Development Company</strong><br/>in India</h3>
              <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center">    
            <img src={require('./../assets/domain-expertise.png')} alt="about-banner"id="animated"/>
          </div>
        </div>
      </div>
    </div>
    <section className='why-us'>
    <div className="leverage_left"><img src={require('./../assets/leverage_left.png')}alt="Mobile-App-Development-Services"/></div>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='section-heads'>
            <h3 className='why-us-h3'>Who we Are</h3>
            <p className="custom-paragraph">We are a global leader in product development, having a wide range of technology experts in our team. You would be surprised to meet our enthusiastic team of blockchain, frontend,backend, Mobility & Automation.</p>
            <p className="custom-paragraph">We are designers, engineers, developers, analysts, programmers, testers, cloud experts, blockchain specialists, automation freaks & smart workers who have developed applications that are now being used by millions of consumers worldwide.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    <div className='expertise about_subsec'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex align-items-center'>
          <img src={require('./../assets/pmo.png')} alt="about-banner" className='img-fluid'/>
          </div>
          <div className='col-md-6 align-items-center'>
          <h2>Process<br/> <b>we follow</b></h2>
          <p>To understand the requirement well &amp; deliver the final product seamlessly we follow a process that is not only transparent but most efficient too! <br/><br/>
          Our process includes practices, and tools, which improves our ability to deliver products at a high velocity. Our updated tech experts allow us to evolve and improve products at a faster pace than other product development companies.<br/><br/>
          We utilize this speed &amp; efficiency in building and scaling your business.
          </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default About;
