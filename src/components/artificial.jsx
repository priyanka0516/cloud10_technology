import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Artificial =()=>
{
  return (
    <>
       <div className='ai-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-sm-12 col-md-12 col-lg-7">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Artificial Inteligence Services</h3>
                    <p>Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to intelligence of humans and other animals. so let's work smartly. </p>
                    {/* <div className='mt-3'>
                        <NavLink to="/service" className='btn-get-started'>Get Started</NavLink>
                    </div> */}
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
                <div className='web-banner-right'>
                    <img src={require('./../assets/aiback.png')} alt="ai-bg" id="animated"/>
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
            <h3 className='why-us-h3'>What AI do</h3>
            <p className='custom-paragraph'>AI is the main force of the fourth scientific and technological revolution, which is dedicated to embodying human intelligence through computational methods. It is widely used in various fields.</p>
          </div>
        </div>
      </div>
        <div className='row py-3'>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/health-insurance.png')}/>
                <h2>Ai in Healthcare </h2>
                <p className='paragraph'>Deep learning AI can be used to help detect diseases faster, provide personalized treatment plans and even automate certain processes such as drug discovery or diagnostics.</p>
            </div>
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/ecommerce.png')}/>
                <h2>Ai in Ecommerce </h2>
                <p className='paragraph'>AI is beneficial for today's online retailers to deliver an outstanding customer and user experience in eCommerce and make intelligent business decisions by using customer data.</p>
            </div> 
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/hacker.png')}/>
                <h2>Ai in Cybersecurity </h2>
                <p className='paragraph'>AI in cybersecurity eliminates time-consuming tasks done manually by human experts. It scans vast data and identifies potential threats and reduces false positives by filtering out non-threatening activities.</p>
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
            <h3 className='why-us-h3'>Benefits Of Using AI</h3>
          </div>
        </div>
        </div>
        
        <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">01</div>
                    </div>
                    <div className="benefit-ai"><h3>No Human Error</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">02</div>
                    </div>
                    <div className="benefit-ai"><h3>Unbiased-Decision</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">03</div>
                    </div>
                    <div className="benefit-ai"><h3>Healthcare-Applications</h3></div>
                </div>
                
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">04</div>
                    </div>
                    <div className="benefit-ai"><h3>No Risk</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">05</div>
                    </div>
                    <div className="benefit-ai"><h3>24/7 Availabilty</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">06</div>
                    </div>
                    <div className="benefit-ai"><h3>Quicker Decision Making</h3></div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">07</div>
                    </div>
                    <div className="benefit-ai"><h3>Managing Task</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle2'>
                    <div className="text">08</div>
                    </div>
                    <div className="benefit-ai"><h3>Save Time</h3></div>
                </div>
            </div>
        </div>
    </div>
  </section>
    </>
  )
}
 
export default  Artificial;
