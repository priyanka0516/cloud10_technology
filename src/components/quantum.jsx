import React from 'react';
import Accordion from './Accordion';
const Quantum = () => {
  const accordionData = [
    {
      title: 'What is quantum computing?',
      content: `Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers. `
    },
    {
      title: 'What is quantum computing used for?',
      content: `Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers. Today, IBM Quantum makes real quantum hardware -- a tool scientists only began to imagine three decades ago -- available to hundreds of thousands of developers.`
    },
  ];
  return (
    <>
    <section className='quantum-banner'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className='mobile-banner-left'>
              <h3 className='mobile-text'>Being a Professional <br/>Quantum Computing Experts</h3>
              <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-end">
            <div className='web-banner-right'>
              <img src={require('./../assets/quantam-card.png')} alt="quantum"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='choose-us'id="iot-section">
      <div className='container'>
        <div className='row'></div>
        <div className="col-md-12">
          <h2 className='why-us-h3'>Platforms Of Quantum Computing</h2>
        </div>
        <div className='row mt-5 wow fadeInUp'>
        <div className='col-md-3'>
          <div className="why-choose-column">
          <img src={require('./../assets/money-bag.gif')} id="tech_logo" alt='Workflow'/>
            <div className="why-text">
              <h3>Finance</h3>
              <p>Companies would further optimise their investment portfolios and improve fraud detection and simulation systems.</p>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
          <div className="why-choose-column">
          <img src={require('./../assets/heartbeat.gif')} id="tech_logo" alt="Team"/>
            <div className="why-text">
              <h3>Healthcare</h3>
              <p>This sector would benefit from the development of new drugs and genetically customised treatments, as well as DNA research.</p>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
          <div className="why-choose-column">
          <img src={require('./../assets/view.gif')} id="tech_logo"alt="Domain"/>
            <div className="why-text">
              <h3>Cybersecurity</h3>
              <p>Quantum programming involves risks, but also advances in data encryption, such as the new Quantum Key Distribution (QKD) system. This is a new technique for sending sensitive information that uses light signals to detect intruders in the system.</p>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
          <div className="why-choose-column">
          <img src={require('./../assets/truck.gif')} id="tech_logo" alt="Consulting"/>
            <div className="why-text">
              <h3>Mobility and transport</h3>
              <p>Companies like Airbus use quantum computing to design more efficient aircraft. Qubits will also enable significant progress in traffic planning systems and route optimisation.</p>
             </div>
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
export default Quantum;
