import React,{Component}from 'react';
import Slider from "react-slick";
import './style.css';
import './responsive.css';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
          <div className='mobile-home-banner'>
          <div className='container'>
            <div className='row'>
            <div className="col-sm-6 col-md-6 col-lg-6">
                <div className='mobile-banner-left'>
                <h1 className='top-text-banner'>Grow Your Business With <strong className='brand-name'> our team</strong></h1>
                    <h2 className='my-3'>We are team of developers.</h2>
                    <div className='mt-3'>
                        <NavLink to="/service" className='btn-get-started'>Get Started</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
            <div className='mobile-banner-right'>
                    <img src={require('./../assets/robot.png')} alt="mainbanner" />
                </div>
            </div>
            </div>
        </div>
    </div>
        {/* <div id="header">
        <div className="container">
        <div className="row">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <h1>Grow Your Business With <strong className='brand-name'> our team</strong></h1>
                    <h2 className='my-3'>We are team of developers.</h2>
                    <div className='mt-3'>
                        <NavLink to="/service" className='btn-get-started'>Get Started</NavLink>
                    </div>
                </div>          
                <div className='col-sm-12 col-md-6 col-lg-6' id="animated">
                    <img src={require('./../assets/tech.png')}/>
                </div>
        </div>
    </div>
    </div> */}
    <section className='why-us'>
    <div class="leverage_left"><img src={require('./../assets/leverage_left.png')}alt="Mobile-App-Development-Services"/></div>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='section-heads'>
            <h3 className='why-us-h3'>What we do</h3>
            <p className="custom-paragraph">At Cloud10, we transform businesses with innovative solutions that unlock future potential while meeting the needs of the organization. We are the leading software company in India.</p>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/mobile-app.png')}/>
        </div>
        </div>
            <h4>Mobile Application Development</h4>
            <p>Being a reputed mobile application development company in India,We provide the best mobile applications for ios and Android user both.</p>
            <NavLink to="/Mobileapp">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/web-app.png')}/>
        </div>
        </div>
            <h4>Web Application Development</h4>
            <p>Our web application development services in cloud10 are highly effective. Providing our clients with the best web application solutions is our goal.</p>
            <NavLink to="/webapp">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/ui.png')}/>
        </div>
        </div>
            <h4>Website Designing</h4>
            <p>Being a reputed webiste designing company in India,We have provided the attractive and impactful website design to you.</p>
            <NavLink to="/webdesign">Read More</NavLink>
          </div>
      </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/development.png')}/>
        </div>
        </div>
            <h4>Blockchain Development</h4>
            <p>Blockchain development refers to building, maintaining, and designing blockchain applications and systems. </p>
            <NavLink to="/blockchain">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/learning.png')}/>
        </div>
        </div>
            <h4>Machine Learning</h4>
            <p>Enhance your business productivity and meet the varied software development demands of your business with the best ERP and CRM services.</p>
            <NavLink to="/webdesign">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/artificial-intelligence.png')}/>
        </div>
        </div>
            <h4>Artificial Intelligence</h4>
            <p>AI assists in every area of our lives, whether we’re trying to read our emails, get driving directions, get music or movie recommendations.</p>
            <NavLink to="/ainetwork">Read More</NavLink>
          </div>
      </div>
      </div>
    </div>
    </section>
    <section className='Domain'>
      <div className='container'>
        <div className='row'>
        <div className="col-md-12">
          <h2 className='why-us-h3'>Domains We Serve</h2>
          </div>
          <div className='row py-2'>
            <div className='col-md-3 col-sm-6 col-xs-6 what_be_box wow fadeInLeft'>
            <img src={require('./../assets/e-commerce.png')} id="domain_logo"/>
              <h3 className='domain-text'>Ecommerce</h3>
            </div>
            <div className='col-md-3 col-sm-6 col-xs-6 what_be_box wow fadeInLeft'>
              <img src={require('./../assets/health.png')} id="domain_logo"/>
              <h3 className='domain-text'>Healthcare</h3>
            </div>
            <div className='col-md-3 col-sm-6 col-xs-6 what_be_box wow fadeInLeft'>
              <img src={require('./../assets/Hotel.png')}id="domain_logo"/>
              <h3 className='domain-text'>Hotel</h3>
            </div>
            <div className='col-md-3 col-sm-6 col-xs-6 what_be_box wow fadeInLeft'>
              <img src={require('./../assets/Travel.png')} id="domain_logo"/>
              <h3 className='domain-text'>Travel</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='why-us'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='section-heads'>
            <h3 className='why-us-h3'>our Expertise</h3>
            {/* <p className="custom-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>
        </div>
      </div>
      <div className='boxes'>
      <div className='row'>
      <div className='col-lg-2 col-md-3 col-sm-4 col-xs-12'>
      <div className="image-shape1 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Android</h5><img src={require('./../assets/android_logo.png')} id="tech_logo"/></div></div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape2  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Java</h5>
      <img src={require('./../assets/java.png')} id="tech_logo"/></div></div></div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape3  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">MERN</h5>
      <img src={require('./../assets/mern-stack-01.png')} id="tech_logo"/></div></div></div>
      
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape4 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">React</h5>
      <img src={require('./../assets/React-icon.png')} id="tech_logo"/></div></div></div>
   
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape5 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Blockchain</h5>
    <img src={require('./../assets/blockchain.png')} id="tech_logo"/></div></div></div>
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape6 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">IOS</h5>
    <img src={require('./../assets/apple.png')} id="tech_logo"/>
    </div></div></div>
    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-12'>
      <div className="image-shape7 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Python</h5>
      <img src={require('./../assets/python.png')} id="tech_logo"/></div></div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape4  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Node Js</h5>
      <img src={require('./../assets/nodejs.png')} id="tech_logo"/></div></div></div>
      
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape3  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Php</h5>
      <img src={require('./../assets/php-logo.png')} id="tech_logo"/></div></div></div>
      
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape6 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Html</h5>
      <img src={require('./../assets/html-5.png')} id="tech_logo"/></div></div></div>
   
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape1 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Artificial Intelligence</h5>
    <img src={require('./../assets/AI-PNG-HD.png')} id="tech_logo"/></div></div></div>
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape2 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Data Science</h5>
    <img src={require('./../assets/datascience.png')} id="tech_logo"/></div></div></div>
    </div>
    </div>
    </div>
    </section>
    <section className='choose-us'>
      <div className='container'>
        <div className='row'></div>
        <div className="col-md-12">
          <h2 className='why-us-h3'>Why Choose Us</h2>
        </div>
        <div className='row mt-5 wow fadeInUp '>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/Team.png')} id="tech_logo"/>
                        <div className="why-text">
                            <h3>Well Balanced Team</h3>
                            <p>With a deep understanding of the IoT &amp; IIoT ecosystem, we have delivered over 100 successful projects. </p>
                        </div>
                    </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/workflow.png')} id="tech_logo"/>
                        <div className="why-text">
                            <h3>Workflow</h3>
                            <p>With a deep understanding of the IoT &amp; IIoT ecosystem, we have delivered over 100 successful projects. </p>
                        </div>
                    </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/domain-expertise.png')} id="tech_logo"/>
                        <div className="why-text">
                            <h3>Domain Expertise</h3>
                            <p>With a deep understanding of the IoT &amp; IIoT ecosystem, we have delivered over 100 successful projects. </p>
                        </div>
                    </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/consulting.png')} id="tech_logo"/>
                        <div className="why-text">
                          <h3>Consulting</h3>
                          <p>With a deep understanding of the IoT &amp; IIoT ecosystem, we have delivered over 100 successful projects. </p>
                        </div>
                    </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/vision.png')} id="tech_logo"/>
                        <div className="why-text">
                          <h3>Clear Vision</h3>
                          <p>With a deep understanding of the IoT &amp; IIoT ecosystem, we have delivered over 100 successful projects. </p>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </section>
  {/* <section className='clients-area'>
    <div className="container">
      <div className='row'>
        <div className='col-md-8'>
          <div className='clients-heading'>
          <h3>Here are Some Clients<br/>who enjoy standing out.</h3>
          </div> 
        </div>
        <div className='col-md-4'>
        <div className='clients-heading'>
          <h3>Some Clients</h3>
          </div>
          </div>
      </div>
      <div className='row py-5'>
        <div className='col-md-3'>
        <img src={require('./../assets/google_client-black.png')} id="tech_logo"/>
        </div>
        <div className='col-md-3'>
        <img src={require('./../assets/aws_client-black.png')} id="tech_logo"/>
        </div>
        <div className='col-md-3'>
        <img src={require('./../assets/booking_client-black.png')} id="tech_logo"/>
        </div>
        <div className='col-md-3'>
        <img src={require('./../assets/expedia_client-black.png')} id="tech_logo"/>
        </div>
      </div>
    </div>
  </section> */}
      </div>
    );
  }
}