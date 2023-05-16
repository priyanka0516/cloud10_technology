import React from 'react';
const Webdesign =()=>
{
  return (
    <>
    <div className='web-design-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>A Leading<br/> <strong>Web 2.0 </strong><br/>Development Company<br/></h3>
                    <p>Web 2.0 describes the current state of the internet, which has more user-generated content and usability for end-users compared to its earlier incarnation, Web 1.0. Web 2.0 does not refer to any specific technical upgrades to the internet; it refers to a shift in how the Internet is used.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">    
                <div className='web-banner-right'>
                    <img src={require('./../assets/web-bg.png')} alt="web-bg"/>
                </div>
            </div>
            </div>
        </div>
    </div>
  
</>
  )
}
export default  Webdesign;
