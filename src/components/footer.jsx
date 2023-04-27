import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const Footer =()=>
{
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
<>
<div className='footer'>
  <div className='container'>
    <div className='row'>
      <div className='col-sm-4 col-xs-12 p-0'>
        <div className='footer-item address'>
          <ul>
            <li>
              <h6 className='footer-title'>Corporate Office</h6>
              <div className="des">
                <ul>
                  <li className='flex'><span><img src={require('./../assets/locationf.png')}alt="address"/></span>Unique Aura Apartment 11/2, Sahakar Marg,Jyoti Nagar
                    Housing Board Flats, Lalkothi, Jaipur, Rajasthan 30200</li>
                  <li className='flex'><span><img src={require('./../assets/mail-contact.png')}alt="phone"/></span><Link to="mailto:info@.co.in">info@cloud10hospitality.com</Link></li>
                  <li className='flex'><span><img src={require('./../assets/phone-call-contact.png')}alt="mail"/></span><Link to="tel: +91 6371499414">+91 6371499414</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-sm-4 col-xs-12'>
        <div className='footer-item'>
          <div className="footer-title">Our Services</div>
            <ul>
              <li className="animate"><Link to="/ainetwork" onClick={scrollToTop} >Artificial Intelligence</Link></li>
              <li className="animate"><Link to="/blockchain" onClick={scrollToTop} >Blockchain Development</Link></li>
              <li className="animate"><Link to="/mobileapp" onClick={scrollToTop} >Mobile Application Development</Link></li>
              <li className="animate"><Link to="/iot" onClick={scrollToTop} >IOT</Link></li>
              <li className="animate"><Link to="/quantum" onClick={scrollToTop} >Quantum Computing</Link></li>
              <li className="animate"><Link to="/cardano" onClick={scrollToTop} >Cardano</Link></li>
              <li className="animate"><Link to="/webapp" onClick={scrollToTop} >Web Application Development</Link></li>
              <li className="animate"><Link to="/webdesign" onClick={scrollToTop} >Website Designing</Link></li>
              <li className="animate"><Link to="/flutter" onClick={scrollToTop} >Flutter Development</Link></li>   
            </ul>
        </div>
      </div>
      <div className='col-sm-4 col-xs-12'>
        <div className='footer-item'>
          <div className="footer-title">Partnership/Authorization</div>
            <ul className="members">
              <li><a><img src={require('./../assets/google_client.png')}alt="client1"/></a></li>
              <li><a><img src={require('./../assets/tesla_client.png')}alt="client2"/></a></li>
              <li><a><img src={require('./../assets/expedia_client.png')}alt="client3"/></a></li>
              <li><a><img src={require('./../assets/booking_client.png')}alt="client4"/></a></li>
              <li><a><img src={require('./../assets/aws_client.png')}alt="client5"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  <div className="fcopy">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
            <p className="ftex">
              Copyright © 2023 Cloud10 Technology. <br/>All rights reserved. 
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p_right footer-item no-padding">
            <div className="footer-sosmed"> 
              <Link to="" target="_blank" title="">
                <div className="item"> 
                <img src={require('./../assets/facebook.png')} alt="fb"/>
                </div>
              </Link> 
              <Link to="" target="_blank" title="">
                <div className="item"> 
                <img src={require('./../assets/instagram.png')} alt="instagram"/>
                </div>
              </Link> 
              <Link href="" target="_blank" title="">
                <div className="item"> 
                <img src={require('./../assets/twitter.png')} alt="twitter"/>
                </div>
              </Link> 
              <Link href="" target="_blank" title="">
                <div className="item"> 
                <img src={require('./../assets/linkedin.png')} alt="linkedin"/>
                </div>
              </Link> 
              <Link to="" target="_blank" title="">
                <div className="item"> 
                <img src={require('./../assets/youtube.png')} alt="youtube"/>
                </div>
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<Button id="top-bottom"onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}>
     <FaArrowCircleUp  />
    </Button>
</>
)
}
export default Footer;