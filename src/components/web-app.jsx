import React from 'react';
const Webapp =()=>
{
  return (
    <>
    <div className='web-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Most Reliable Web application Developemnt Services</h3>
                    <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">   
                <div className='web-banner-right'>
                    <img src={require('./../assets/web-development.webp')} id="animated" alt="webapp"/>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className='working'>
        <div className='container'>
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
                            <p className="paragraph">Our Python experts you can make a web application with high security and as a full-stack development platform.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/nodejs.png')} alt="node"/>
                            </div>
                            <h3>Node</h3>
                            <p className="paragraph">Our Node.js development services enable you to build powerful & imapactful , dynamic websites and back-end API services.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/php.png')} alt="php"/>
                            </div>
                            <h3>Php</h3>
                            <p className="paragraph">Our PHP experts can make a web application based scalability, flexibility, security based and PLatform independent services.</p>
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
                            <p className="paragraph">Our front-end developers make sure to design impressive views for your application using React frameworks.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/angular.png')} alt="angular" id="ficon"/>
                            </div>
                            <h3>Angular</h3>
                            <p className="paragraph">Our Angular development services enable you to build a dynamic web applications.Angular provides developers with a variety of tools and features that can increase productivity, such as a powerful template system, built-in data binding, and reusable components. This can help developers to build web applications more quickly and efficiently.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/vue.png')} alt="vue"id="ficon"/>
                            </div>
                            <h3>Vue</h3>
                            <p className="paragraph">Our Vue application developers enable interactive user interfaces through component-based programming models and make your application impactful.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/flutter.png')} alt="flutter" id="ficon"/>
                            </div>
                            <h3>Flutter</h3>
                            <p className="paragraph">Our Flutter developers  can build a web application which must be  single codebase, customizable widgets, a growing community, easy integration, and cost-effectiveness.</p>
                        </div>
                        </div>
            </div>
        </div>
    </div>
    </>
  )
} 
export default Webapp;
