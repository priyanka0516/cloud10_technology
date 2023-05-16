import React from 'react';
import Accordion from './Accordion';
const Artificial = () => {
    const accordionData = [
        {
          title: 'What is artificial intelligence (AI)?',
          content: `Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.`
        },
        {
          title: 'How is AI used today?',
          content: `Voice assistants, image recognition for face unlock in cellphones, and ML-based financial fraud detection are examples of AI software currently being used in everyday life. Typically, just downloading AI software from an online store and having no other devices is required.`
        },
        {
          title: 'What are the benefits of AI?',
          content: `By automating certain tasks and providing real-time insights, AI can help organizations make faster and more informed decisions. This can be particularly valuable in high-stakes environments, where decisions must be made quickly and accurately to prevent costly errors or save lives.`
        },
        {
          title: 'What is the scope of AI?',
          content: `The scope of Artificial Intelligence is limited to domestic and commercial purposes as the medical and aviation sectors are also using AI to improve their services. If AI is outperforming human efforts, then opting for AI automation will reduce costs in the long run for a business.`
        },
        {
          title: 'Why is AI technology important?',
          content: `Thanks to machine learning and deep learning, AI applications can learn from data and results in near real time, analyzing new information from many sources and adapting accordingly, with a level of accuracy that's invaluable to business. (product recommendations are a prime example.)`
        }
      ];
  return (
    <>
    <div className='ai-banner'>
        <div className='container'>
        <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text' style={{color:'#fff'}}>A Leading <br/> <strong>Artificial Inteligence</strong> Development Company</h3>
                    <p style={{color:'#fff'}}>We know that Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to intelligence of humans and other animals. so let's work smartly.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">    
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
            <img src={require('./../assets/health-insurance.png')} alt="health-insurance"/>
                <h2>Ai in Healthcare </h2>
                <p className='paragraph'>Deep learning AI can be used to help detect diseases faster, provide personalized treatment plans and even automate certain processes such as drug discovery or diagnostics.</p>
            </div>
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/ecommerce.png')} alt="ecommerce"/>
                <h2>Ai in Ecommerce </h2>
                <p className='paragraph'>AI is beneficial for today's online retailers to deliver an outstanding customer and user experience in eCommerce and make intelligent business decisions by using customer data.</p>
            </div> 
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/hacker.png')} alt="Cybersecurity"/>
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
export default Artificial;
