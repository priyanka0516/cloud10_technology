import React from 'react';
import Accordion from './Accordion';
const Mobileapp = () => {
    const accordionData = [
        {
          title: 'What is the cost of developing an app?',
          content: `Generally, the cost of developing an app depends on its features and complexity. We are willing to provide a free estimate to you.`
        },
        {
          title: 'What is needed for mobile application development?',
          content: ` mobile app development process requires creating software that can be installed on the device, and enabling backend services for data access through APIs, and testing the application on target devices.`
        },
        {
          title: 'How long does it take to build a mobile app on average?',
          content: `This depends on how complex your app is and how far along your project is. There is no set amount of time for each stage, so if you've already written your project brief and conducted your research, you'll need less time. With a full-stack team of developers and experts, we can ensure that you lose no time getting your mobile app to market. It can take anywhere between three and nine months from idea to launch.`
        },
     
      ];
  return (
    <>
    <div className='mobile-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Leading Mobile application Developemnt Company for Products</h3>
                    <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">    
                {/* <div className='mobile-banner-right'> */}
                    <img src={require('./../assets/mobile-apps.png')} alt="mobileapplication" className='img-fluid'/>
                {/* </div> */}
            </div>
            </div>
        </div>
    </div>
    <div className='working'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='why-us-h3'>Industries we’ve excelled in</h3>
            </div>
            </div>
            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init'>
                    <div className='mobappBox'>
                        <div className="customApplicatonBox"> 
                                <div className="customAppIcon">
                                <img src={require('./../assets/gaming.png')} alt="gaming"/>
                                </div>                  
                            <div className="customAppText">
                                <h3>Gaming Apps</h3>
                                <p className="paragraph">You can rely on us for the most resilient, scalable, and high-performing fintech solutions.</p>
                            </div>
                    </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init'>
                <div className='mobappBox'>
                        <div className="customApplicatonBox"> 
                                <div className="customAppIcon">
                                <img src={require('./../assets/hospitality.png')} alt="hospitality"/>
                                </div>                  
                            <div className="customAppText">
                                <h3>Hotel</h3>
                                <p className="paragraph">You can rely on us for the most resilient, scalable, and high-performing fintech solutions.</p>
                            </div>
                    </div>
                    </div>  
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init'>
                <div className='mobappBox'>
                        <div className="customApplicatonBox"> 
                                <div className="customAppIcon">
                                <img src={require('./../assets/heartbeat.png')} alt="heartbeat"/>
                                </div>                  
                            <div className="customAppText">
                                <h3>HealthCare</h3>
                                <p className="paragraph">You can rely on us for the most resilient, scalable, and high-performing fintech solutions.</p>
                            </div>
                        </div>
                </div>   
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init'>
                <div className='mobappBox'>
                        <div className="customApplicatonBox"> 
                                <div className="customAppIcon">
                                <img src={require('./../assets/shopping-cart.png')} alt="shopping-cart"/>
                                </div>                  
                            <div className="customAppText">
                                <h3>Shopping</h3>
                                <p className="paragraph">You can rely on us for the most resilient, scalable, and high-performing fintech solutions.</p>
                            </div>
                        </div>
                </div>   
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init'>
                <div className='mobappBox'>
                        <div className="customApplicatonBox"> 
                                <div className="customAppIcon">
                                <img src={require('./../assets/mental-health.png')} alt="mental-health"/>
                                </div>                  
                            <div className="customAppText">
                                <h3>Entertainment</h3>
                                <p className="paragraph">You can rely on us for the most resilient, scalable, and high-performing fintech solutions.</p>
                            </div>
                        </div>
                </div>   
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init'>
                <div className='mobappBox'>
                        <div className="customApplicatonBox"> 
                                <div className="customAppIcon">
                                <img src={require('./../assets/salary.png')} alt="salary"/>
                                </div>                  
                            <div className="customAppText">
                                <h3>Payroll</h3>
                                <p className="paragraph">You can rely on us for the most resilient, scalable, and high-performing fintech solutions.</p>
                            </div>
                        </div>
                </div>   
                </div>
            </div>
        </div>
    </div>
    <div className='steps'>
        <div className='container'>
            <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                <div className='left-step'>
                    <h3>Steps to Create The Perfect <br/>Mobile App Development Plan</h3>
                </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <div className='step-duplex'>
                <span>01</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/inspection.png')} alt="inspection"/>
                    <h3>Requirement</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>02</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/ux-design.png')} alt="ui-design"/>
                    <h3>UX Design</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>03</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/ui-design1.png')} alt="ui-design1"/>
                    <h3>UI Design</h3>
                </div>  
            </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <div className='step-duplex'>
                <span>04</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/settings2.png')} alt="settings"/>
                    <h3>System Design</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>05</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/testing.png')} alt="testing"/>
                    <h3>Development & Testing</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>06</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/settings.png')} alt="Maintenance"/>
                    <h3>Maintenance</h3>
                </div>  
            </div>
            </div>
            </div>
        </div>
    </div>
    <div className='faq'>
      <div className='container'>
        <div className='row'>
        <div className="col-md-12">
          <h2 className='why-us-h3'>Frequently Asked Questions</h2>
        </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>    
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default  Mobileapp;
