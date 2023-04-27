import React from 'react';
 
const Service =()=>
{
  return (
    <>
    <div className='service-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Most Reliable Web application Developemnt Services</h3>
                    <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end">    
                <div className='web-banner-right'>
                    <img src={require('./../assets/Software.png')} id="animated"/>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className='all-service'>
      <div className='container'>
      <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="section-heads"><h3 className="why-us-h3">Services</h3></div></div></div>
        <div className='row keyfeature-card-row'>
          <div className='col-md-4'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/service-mobileapp.png')} alt="service1"/></div><h4>Mobile Apps development</h4><p>Being a reputed mobile application development company in India,We provide the best mobile applications for ios and Android user both.</p></div>
          </div>
          <div className='col-md-4'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/service-web.png')} alt="service2"/></div><h4>Web Application Development</h4><p>Our web application development services in cloud10 are highly effective. Providing our clients with the best web application solutions is our goal.</p></div>
          </div>
          <div className='col-md-4'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/service-ui.png')} alt="service3"/></div><h4>Website Designing</h4><p>Being a reputed webiste designing company in India,We have provided the attractive and impactful website design to you.</p></div>
          </div>
          <div className='col-md-4'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/service-blockchain.png')} alt="service4"/></div><h4>Blockchain Development</h4><p>Blockchain development refers to building, maintaining, and designing blockchain applications and systems.</p></div>
          </div>
          <div className='col-md-4'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/service-web.png')} alt="service5"/></div><h4>Flutter Development</h4><p>Flutter is an open-source mobile application development framework created by Google. It allows developers to create high-quality, visually attractive, and fast mobile apps for both iOS and Android platforms using a single codebase.</p></div>
          </div>
          <div className='col-md-4'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/service-ai.png')} alt="service6"/></div><h4>Artificial Intelligence</h4><p>AI assists in every area of our lives, whether we’re trying to read our emails, get driving directions, get music or movie recommendations.</p></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
 
export default  Service;
