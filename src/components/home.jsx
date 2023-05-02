import React,{Component}from 'react';
// import Slider from "react-slick";
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
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className='mobile-banner-left'>
              <h1 className='top-text-banner'>A Leading Service <strong className='brand-name'>Based Company in India</strong></h1>
              <h2 className='my-3'>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</h2>
              <div className='mt-3'>
                <NavLink to="/service" className='btn-get-started'>Get Started</NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center">    
            {/* <div className='mobile-banner-right'> */}
            <img src={require('./../assets/robot.png')} alt="mainbanner" id="animated"/>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
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
        <img src={require('./../assets/artificial-intelligence.png')} alt="ai"/>
        </div>
        </div>
        <span className="pricing">
				<span>
					<small>Trending</small>
				</span>
			</span>
            <h4>Artificial Intelligence</h4>
            <p>AI assists in every area of our lives, whether we’re trying to read our emails, get driving directions, get music or movie recommendations.</p>
            <NavLink to="/ainetwork">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/development.png')} alt="blockchain"/>
        </div>
        </div>
        <span className="pricing">
				<span>
					<small>Trending</small>
				</span>
			</span>
            <h4>Blockchain Development</h4>
            <p>Blockchain development refers to building, maintaining, and designing blockchain applications and systems. </p>
            <NavLink to="/blockchain">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/mobile-app.png')} alt="mobile-app"/>
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
        <img src={require('./../assets/iot.png')} alt="iot"/>
        </div>
        </div>
        <span className="pricing">
				<span>
					<small>Trending</small>
				</span>
			</span>
            <h4>IOT</h4>
            <p>Our IOT development services in cloud10 are highly effective. Providing our clients with the best web application solutions is our goal.</p>
            <NavLink to="/iot">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/ui.png')} alt="quantum"/>
        </div>
        </div>
        <span className="pricing">
				<span>
					<small>Trending</small>
				</span>
			</span>
            <h4>Quantum Computing</h4>
            <p>Our Quantum Computing services in cloud10 are highly effective.Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers. </p>
            <NavLink to="/quantum">Read More</NavLink>
          </div>
      </div>  
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/cardano.png')} alt="cardano"/>
        </div>
        </div>
        <span className="pricing">
				<span>
					<small>Trending</small>
				</span>
			</span>
            <h4>Cardano</h4>
            <p>Our Cardano development services in cloud10 are highly effective. Our  main goals is to provide a decentralized platform for developing and running smart contracts and decentralized applications (dapps)</p>
            <NavLink to="/cardano">Read More</NavLink>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="srv-bx">
        <div className="circle-block">
        <div className="circle-with-icon">
        <img src={require('./../assets/web-app.png')} alt="webapp"/>
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
        <img src={require('./../assets/ui.png')} alt="ui"/>
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
        <img src={require('./../assets/learning.png')} alt="flutter"/>
        </div>
        </div>
            <h4>Flutter Development </h4>
            <p>Flutter is an open-source mobile application development framework created by Google. It allows developers to create high-quality, visually attractive, and fast mobile apps for both iOS and Android platforms using a single codebase.</p>
            <NavLink to="/flutter">Read More</NavLink>
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
            <img src={require('./../assets/e-commerce.png')} id="domain_logo" alt="ecommerce"/>
              <h3 className='domain-text'>Ecommerce</h3>
            </div>
            <div className='col-md-3 col-sm-6 col-xs-6 what_be_box wow fadeInLeft'>
              <img src={require('./../assets/health.png')} id="domain_logo" alt="health"/>
              <h3 className='domain-text'>Healthcare</h3>
            </div>
            <div className='col-md-3 col-sm-6 col-xs-6 what_be_box wow fadeInLeft'>
              <img src={require('./../assets/Hotel.png')}id="domain_logo" alt="Hotel"/>
              <h3 className='domain-text'>Hotel</h3>
            </div>
            <div className='col-md-3 col-sm-6 col-xs-6 what_be_box wow fadeInLeft'>
              <img src={require('./../assets/Travel.png')} id="domain_logo" alt="travel"/>
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
          </div>
        </div>
      </div>
      <div className='boxes'>
      <div className='row'>
      <div className='col-lg-2 col-md-3 col-sm-4 col-xs-12'>
      <div className="image-shape1 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Android</h5><img src={require('./../assets/android_logo.png')} id="tech_logo" alt="android"/></div></div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape2  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Java</h5>
      <img src={require('./../assets/java.png')} id="tech_logo" alt="java"/></div></div></div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape3  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">MERN</h5>
      <img src={require('./../assets/mern-stack-01.png')} id="tech_logo"  alt="mern"/></div></div></div>
      
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape4 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">React</h5>
      <img src={require('./../assets/React-icon.png')} id="tech_logo"  alt="react"/></div></div></div>
   
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape5 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Blockchain</h5>
    <img src={require('./../assets/blockchain.png')} id="tech_logo"  alt="blockchain"/></div></div></div>
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape6 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">IOS</h5>
    <img src={require('./../assets/apple.png')} id="tech_logo"  alt="ios"/>
    </div></div></div>
    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-12'>
      <div className="image-shape7 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Python</h5>
      <img src={require('./../assets/python.png')} id="tech_logo" alt="python"/></div></div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape4  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Node Js</h5>
      <img src={require('./../assets/nodejs.png')} id="tech_logo" alt="nodejs"/></div></div></div>
      
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape3  m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Php</h5>
      <img src={require('./../assets/php-logo.png')} id="tech_logo" alt="php"/></div></div></div>
      
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape6 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Html</h5>
      <img src={require('./../assets/html-5.png')} id="tech_logo"  alt="html"/></div></div></div>
   
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape1 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Artificial Intelligence</h5>
    <img src={require('./../assets/AI-PNG-HD.png')} id="tech_logo"  alt="ai"/></div></div></div>
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12"><div className="image-shape2 m-bx"><div className="elementor-icon-box-content"><h5 className="elementor-icon-box-title">Data Science</h5>
    <img src={require('./../assets/datascience.png')} id="tech_logo" alt="datascience"/></div></div></div>
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
          <img src={require('./../assets/Team.png')} id="tech_logo" alt="Team"/>
            <div className="why-text">
              <h3>Well Balanced Team</h3>
              <p>We are a team of developers, designers, software experts, providing the best services to you.</p>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/workflow.png')} id="tech_logo" alt='Workflow'/>
            <div className="why-text">
              <h3>Workflow</h3>
              <p>At Cloud10 Technology, we exclusively use ethical work culture techniques for our clients from planning to deploying a pproject. </p>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/domain-expert.png')} id="tech_logo"alt="Domain"/>
            <div className="why-text">
              <h3>Domain Expertise</h3>
              <p>Whether you are a startup or an organization, Cloud10 Technology is a full-service enterprise where you can discover comprehensive development services.</p>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/consulting.png')} id="tech_logo" alt="Consulting"/>
            <div className="why-text">
              <h3>Consulting</h3>
              <p>Our team here to help you if you have any queries.we are providing quality consulting.</p>
             </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/vision.png')} id="tech_logo" alt="Vision"/>
            <div className="why-text">
              <h3>Clear Vision</h3>
              <p>providing you best service at cloud10 is our main vision and mission.Whether you are a startup or an organization , we have only one goal to give you profit.  </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='working'>
        <div className='container'>
            <div className='row'>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology1">
                            <div className="impactIcon">
                              <img src={require('./../assets/mission.png')}  id="tech-logo"  alt="java"/>
                            </div>
                            <h3>Our Mission</h3>
                            <p className="paragraph">To be a part of people's life by offering services, with high quality, innovation, and at affordable prices anywhere in India.</p>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology1">
                            <div className="impactIcon">
                            <img src={require('./../assets/vision1.png')}  id="tech-logo" alt="python"/>
                            </div>
                            <h3>Our Vision</h3>
                            <p className="paragraph">To be one of the top service based company in the world, admired for its, brands, innovations and outstanding results.</p>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology1">
                            <div className="impactIcon">
                            <img src={require('./../assets/teamwork.png')} id="tech-logo"  alt="node"/>
                            </div>
                            <h3>Our Culture</h3>
                            <p className="paragraph">We maintain general atmosphere to the company by giving values to our employees, maintaing a friendly environment in our company. </p>
                        </div>
                        </div>
            </div>
        </div>
    </div>
    {/* <section className='mission'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className='image-1'>
            <img src={require('./../assets/why_eventstan1.png')}  alt="travel"/>
            <div class="desc-partner"><img src={require('./../assets/target.gif')} alt="target" /><h6>Our Mission</h6><p>To be a part of people's life by offering services ,with high quality, innovation, and at affordable prices anywhere in India.</p></div>
            </div>    
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className='image-1'>
          <img src={require('./../assets/why_eventstan2.png')}  alt="travel"/>
          <div class="desc-partner"><img src={require('./../assets/view.gif')} alt="vision"/><h6>Our Vision</h6><p>To be one of the top service based company in the world, admired for its, brands, innovations and results.</p></div>
          </div>
            </div>
        </div>
      </div>
    </section> */}
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