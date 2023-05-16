import React from 'react';
const Product = () => {
  return (
    <>
    <section className='iot-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'style={{color:'#fff'}}>Being a Leading <br/> <strong>Service Based </strong><br/>Company in india</h3>
                    <p style={{color:'#fff'}}>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
                <div className='web-banner-right'>
                    <img src={require('./../assets/CRM-jumbo_XS.png')} alt="iotbanner"/>
                </div>
            </div>
            </div>
        </div>
    </section>
    <div className='expertise about_subsec'>
    <div className="leverage_left"><img src={require('./../assets/leverage_left.png')}alt="Mobile-App-Development-Services"/></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex align-items-center'>
          <img src={require('./../assets/LMS-banner-2-1.png')} alt="about-banner" className='img-fluid'/>
          </div>
          <div className='col-md-6 align-items-center' style={{padding:'35px'}}>
          <h2>Loyalty<br/><b>Management System </b></h2>
          <p>Cloud10 LMS (Loyalty Management System) is a platform that helps businesses to integrate, implement and manage their loyalty programs. It provides a centralized platform for tracking customer interactions, managing rewards and incentives, and analyzing customer behavior and preferences. The system is designed as a pluggable module for Channels or Booking Engines of the hospitality domain.
          </p>
          </div>
        </div>
      </div>
    </div>
    <section className='choose-us'>
      <div className='container'>
        <div className='row'></div>
        <div className="col-md-12">
          <h2 className='why-us-h3'>Features</h2>
        </div>
        <div className='row mt-5 wow fadeInUp '>
          <div className='col-md-3'>
          <div className="why-choose-column">
          <img src={require('./../assets/trophy.png')} id="tech_logo" alt="Team"/>
            <div className="why-text">
              <h3>Rewards management</h3>
              <p>A module for managing rewards and incentives, such as points, discounts, free products, or exclusive offers.</p>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
          <div className="why-choose-column">
          <img src={require('./../assets/customer-service.png')} id="tech_logo"alt="webapp"/>
            <div className="why-text">
              <h3>Customer Engagement</h3>
              <p>Tools for engaging customers, such as targeted messaging, personalized recommendations, and social media integrations</p>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
          <div className="why-choose-column">
         <img src={require('./../assets/report.png')}id="tech_logo" alt="flutter"/>
            <div className="why-text">
              <h3>Analytics and reporting</h3>
              <p>A dashboard that provides insights into customer behavior, program performance, and ROI.</p>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
          <div className="why-choose-column">
         <img src={require('./../assets/blogger.png')}id="tech_logo" alt="flutter"/>
            <div className="why-text">
              <h3>Administration & security</h3>
              <p>Tools for managing program rules, settings, and access levels, as well as ensuring compliance with data protection regulations.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default  Product;
