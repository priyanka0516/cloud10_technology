import React,{useState} from 'react';
const Iot =()=>
{

  return (
    <>
    <section className='iot-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Being a Leading  IOT<br/>Development Company</h3>
                    <p>We make scalable IOT platforms.It's the beginning of machines taking over the world</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end">
                <div className='web-banner-right'>
                    <img src={require('./../assets/iot-ban.png')} alt="iotbanner"/>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section className='board'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                  <div className='board-left'>
                  <img src={require('./../assets/arduino-board.png')}  alt="Team"/>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                <div className="board-right"><h2><strong className='board-text'>The Benefits </strong>that <br/>Internet of Things (IOT)<br/> Can Bring To Your Workplace</h2>
                <div className='benefits-duplex'>
                    <div id='circle3'>
                    <div className="text">01</div>
                    </div>
                    <div className="benefit-ai"><h3>Increased Productivity</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle3'>
                    <div className="text">02</div>
                    </div>
                    <div className="benefit-ai"><h3>Better Management Of Facilities</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle3'>
                    <div className="text">03</div>
                    </div>
                    <div className="benefit-ai"><h3>Increased Business Oppertunities</h3></div>
                </div>
                <div className='benefits-duplex'>
                    <div id='circle3'>
                    <div className="text">04</div>
                    </div>
                    <div className="benefit-ai"><h3>More Optimized Workspaces</h3></div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section className='choose-us'id="iot-section">
      <div className='container'>
        <div className='row'></div>
        <div className="col-md-12">
          <h2 className='why-us-h3'>IOT Platform</h2>
        </div>
        <div className='row mt-5 wow fadeInUp '>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/heartbeat.gif')} id="tech_logo" alt="Team"/>
            <div className="why-text">
              <h3>Healthcare</h3>
              <p>Remote Patient Monitoring: IoT can be used to remotely monitor patients' health status and vital signs, such as heart rate, blood pressure, glucose level, and more. This allows healthcare providers to track patients' health conditions and intervene as necessary before a medical emergency occurs.</p>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/energy-drink.gif')} id="tech_logo" alt='Workflow'/>
            <div className="why-text">
              <h3>Utilities and Energy</h3>
              <p>IoT can improve energy efficiency, reduce costs, and enhance the reliability of the power grid. Here are some ways IoT is being used in utilities and energy:Smart Grids,Energy Management,Customer Engagement.</p>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/eco.gif')} id="tech_logo"alt="Domain"/>
            <div className="why-text">
              <h3>Manufacturing</h3>
              <p>IoT can improve production efficiency, reduce downtime, and increase product quality. Here are some ways IoT is being used in manufacturing:Predictive Maintenance,Quality Control,Smart Factories,Supply Chain Management,Asset Tracking.</p>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/houses.gif')} id="tech_logo" alt="Consulting"/>
            <div className="why-text">
              <h3>Real Estate</h3>
              <p> IoT can improve property management, increase energy efficiency, and enhance the tenant experience. Here are some ways IoT is being used in real estate:Smart Buildings,Security,Maintenance.</p>
             </div>
          </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/shopping-cart.gif')} id="tech_logo" alt="Vision"/>
            <div className="why-text">
              <h3>Retail</h3>
              <p>IoT (Internet of Things) technology has several applications in the retail industry. By connecting various devices and systems, IoT can improve the customer experience, increase efficiency, and reduce costs.</p>
            </div>
            </div>
          </div>
          <div className='col-md-4'>
          <div className="why-choose-column">
          <img src={require('./../assets/truck.gif')} id="tech_logo" alt="Vision"/>
            <div className="why-text">
              <h3>Transportation</h3>
              <p> IoT can improve supply chain efficiency, increase asset utilization, and enhance customer service. Here are some ways IoT is being used in transportation and logistics:Asset Tracking,Predictive Maintenance,Customer Service.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section id="iot_faq">
    <div className='container-fluid'>
        <div className='row'>
        <div className="col-md-12">
          <h2 className='why-us-h3'>Why Choose Us</h2>
        </div>
        </div>
        <div className='row'>
            <div className='col-lg-12'>
            <div className="accordian">
        <div className="accordian-header" onClick={handleOpen}>
          <div>Accordion Header</div>
          <div className="sign">{show ? '-' : '+'}</div>
        </div>
        {show && (
          <div className="accordian-body">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's ever since the 1500s,
            when an unknown printer took a galley of type standard dummy text
            and scrambled it to make a type specimen book.
          </div>
        )}
      </div>
            </div>
        </div>
    </div>
    </section> */}
</>
  )
}
export default  Iot;
