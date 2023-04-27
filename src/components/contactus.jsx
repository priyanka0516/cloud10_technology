import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
const Contact = () =>
{
  return (
    <>
      <div className='contact-banner'>
            <div className='contact-inner-banner'>
                <div className='container'>
            <div className='mobile-banner-left'>
                        <h3 className='mobile-text'>Let's talk to bring<br/> Idea Into Reality</h3>
                        <p>We are just helping startups and Enterprises in Embracing<br/> Technologies That bring the highest values.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="banner1">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>

                    </div>
                    <div className='col-md-6'>
                       <h3>We are here to help you<br/>anytime just call or email </h3> 
                    </div>
                </div>
            </div> 
        </div> */}
        <div className="team">
		<div className="container">
            <div className='row'>
            <div className='col-md-6'>
            </div>
            <div className='col-md-6'>            
            </div>
			</div>
		</div>
	    </div>
        <section className='contact'>
        <div class="leverage_left"><img src={require('./../assets/leverage_left.png')}alt="Mobile-App-Development-Services"/></div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-5 col-md-5 col-sm-12 aos-init aos-animate'>
        <h2 className="contact-heading mt-5">LET'S GET IN TOUCH</h2>
        <div className="contact-details">
                        <ul>
                            <li>
                            <span><img src={require('./../assets/mail-contact.png')}alt="mail"/></span>
                                <div>
                                    <h3 className='address-space'>Mail us Here</h3>
                                    <Link id="contact-adrs" to="mailTo:info@hashstudioz.com">info@.com</Link>
                                </div>
                            </li>
                            <li>
                                <span><img src={require('./../assets/phone-call-contact.png')}alt="Mphone"/></span>
                                <div>
                                    <h3 className='address-space'>Call us Here</h3>
                                    <Link to="tel:+91-9500069296" id="contact-adrs"> +91-6371499414</Link><br/>
                                </div>
                            </li>
                        </ul>
                    </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 aos-init aos-animate">
            <div id="map-google">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2726372701854!2d75.79169726436544!3d26.89484121733527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43d27873b63%3A0xdfea79f3211a2539!2sUnique%20Aura%20Apartment!5e0!3m2!1sen!2sin!4v1672894035190!5m2!1sen!2sin"      
                      width="100%"
                      id="myId"
                      height="500px"
                      className="myClassname"
                    />
            </div>
        </div>
        </div>
        </div>
        </section>
    </>
  )
}
export default Contact;
