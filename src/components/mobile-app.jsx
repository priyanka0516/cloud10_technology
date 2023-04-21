import React from 'react';
 
const Mobileapp =()=>
{
  return (
    <>
    <div className='mobile-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-sm-12 col-md-12 col-lg-7">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Leading Mobile application Developemnt Company for Products</h3>
                    <p>Get mobile apps from the best development company.</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
                <div className='mobile-banner-right'>
                    <img src={require('./../assets/mobile-apps.png')}/>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className='working'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='why-us-h3'>What we do</h3>
            </div>
            </div>
            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init'>
                    <div className='mobappBox'>
                        <div className="customApplicatonBox"> 
                                <div className="customAppIcon">
                                <img src={require('./../assets/gaming.png')}/>
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
                                <img src={require('./../assets/hospitality.png')}/>
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
                                <img src={require('./../assets/heartbeat.png')}/>
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
                                <img src={require('./../assets/shopping-cart.png')}/>
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
                                <img src={require('./../assets/mental-health.png')}/>
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
                                <img src={require('./../assets/salary.png')}/>
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
                <img src={require('./../assets/inspection.png')}/>
                    <h3>Requirement</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>02</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/ux-design.png')}/>
                    <h3>UX Design</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>03</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/ui-design1.png')}/>
                    <h3>UI Design</h3>
                </div>  
            </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <div className='step-duplex'>
                <span>04</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/settings2.png')}/>
                    <h3>System Design</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>05</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/testing.png')}/>
                    <h3>Development & Testing</h3>
                </div>  
            </div>
            <div className='step-duplex'>
                <span>06</span>                  
                <div className="step-duplex_cont">
                <img src={require('./../assets/settings.png')}/>
                    <h3>Maintenance</h3>
                </div>  
            </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default  Mobileapp;
