import React from 'react';
 
const Webapp =()=>
{
  return (
    <>
    <div className='web-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-sm-12 col-md-12 col-lg-7">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Most Reliable Web application Developemnt Services</h3>
                    <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
                <div className='web-banner-right'>
                    <img src={require('./../assets/web-development.webp')} id="animated"/>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className='working'>
        <div className='container'>
            {/* <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='why-us-h3'>What we do</h3>
            </div>
            </div> */}
            <div className='row'>
                <p>Backend Development</p>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                              <img src={require('./../assets/java.png')} alt="java"/>
                            </div>
                            <h3>Java</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/python.png')} alt="python"/>
                            </div>
                            <h3>Python</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/nodejs.png')} alt="node"/>
                            </div>
                            <h3>Node</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/php.png')} alt="php"/>
                            </div>
                            <h3>Php</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
            </div>
            <div className='row py-3'>
                <p>Frontend Development</p>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                              <img src={require('./../assets/React-icon.png')} alt="React"/>
                            </div>
                            <h3>React</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/angular.png')} alt="angular" id="ficon"/>
                            </div>
                            <h3>Angular</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/vue.png')} alt="vue"id="ficon"/>
                            </div>
                            <h3>Vue</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/flutter.png')} alt="flutter" id="ficon"/>
                            </div>
                            <h3>Flutter</h3>
                            <p className="paragraph">Java's website design is known for its ability to engage a larger audience and emerge as the best branding website. The CMS allows developers to customize themes and templates.</p>
                        </div>
                        </div>
            </div>
        </div>
    </div>
    </>
  )
}
 
export default  Webapp;
