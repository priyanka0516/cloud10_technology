import React from 'react';
import { NavLink } from 'react-router-dom';
const Blockchain =()=>
{
  return (
    <>
       <div className='blockchain-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-sm-12 col-md-12 col-lg-8">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>BlockChain Development <br/>Services</h3>
                    <p>With our proven expertise in blockchain technologies, we build solutions that are highly secure, transparent, yet scalable.
                    </p>
                    {/* <div className='mt-3'>
                        <NavLink to="/service" className='btn-get-started'>Get Started</NavLink>
                    </div> */}
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
                <div className='web-banner-right'>
                    <img src={require('./../assets/bb1.webp')} alt="blochchain-back" id="animated"/>
                </div>
            </div>
            </div>
        </div>
    </div>
  <div className='ai-service'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='section-heads'>
            <h3 className='why-us-h3'>What Blockchain do</h3>
            <p className='custom-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
        <div className='row py-3'>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/health-insurance.png')} alt="health-insurance"/>
                <h2>Blockchain Application Development</h2>
                <p className='paragraph'>With profound knowledge and experience in developing and managing decentralized solutions, we build business processes highly secure, transparent and globally accessible.
                We have already developed apps for Games, Exchanges, Wallets, Finance, real estate, healthcare industries &amp; for IoT startups.</p>
            </div>
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/ecommerce.png')} alt="ecommerce"/>
                <h2>Fintech Application Development</h2>
                <p className='paragraph'>or banking, asset management, insurance, and other domains, we do Fintech Blockchain app development services that are centered on security, performance, and automation. Our apps provide the best customer experience while making the process faster and smoother.</p>
            </div> 
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/hacker.png')} alt="hacker"/>
                <h2>Blockchain Development Solutions</h2>
                <p className='paragraph'>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more.</p>
            </div>  
            </div>
        </div>
    </div>
  </div>
  <section className='benefits'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='section-heads'>
            <h3 className='why-us-h3'>Benefits Of Blockchain</h3>
          </div>
        </div>
      </div>
        <div className='row py-3'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <div className='benefits-blockchain-duplex'>
                    <span>01</span>
                    <div className="benef_cont"><h3>Efficiency</h3>
                    <p>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more</p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>03</span>
                    <div className="benef_cont"><h3>Transparency</h3>
                    <p>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more</p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>05</span>
                    <div className="benef_cont"><h3>Security</h3>
                    <p>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more</p>
                    </div>  
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <div className='benefits-blockchain-duplex'>
                    <span>02</span>
                    <div className="benef_cont"><h3>Network Distribution</h3>
                    <p>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more</p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>04</span>
                    <div className="benef_cont"><h3>Availabilty</h3>
                    <p>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more</p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>06</span>
                    <div className="benef_cont"><h3>Automation</h3>
                    <p>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  </section>
    </>
  )
}
 
export default  Blockchain;
