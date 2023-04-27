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
                    <h3 className='mobile-text'>A Leading Attractive <br/>UI/UX Design <br/> Services Company</h3>
                    <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end">    
                <div className='web-banner-right'>
                    <img src={require('./../assets/web-bg.png')} alt=""/>
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
            <h3 className='why-us-h3'>Benefits</h3>
          </div>
        </div>
      </div>
        <div className='row py-3'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <div className='webdesign-duplex'>
                    <span>01</span>
                    <div className="benef_cont"><h3>Site Purpose</h3>
                    <p>Like a mission statement, a website’s purpose gives the primary reason for the site’s existence in the world. </p>
                    </div>  
                </div>
                <div  className='webdesign-duplex'>
                    <span>03</span>
                    <div className="benef_cont"><h3>Transparency</h3>
                    <p>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more</p>
                    </div>  
                </div>
                <div className='webdesign-duplex'>
                    <span>05</span>
                    <div className="benef_cont"><h3>Site Objectives</h3>
                    <p>What actions will this audience want to perform when they visit your website? What actions does your organization want this audience to perform when they visit your website?</p>
                    </div>  
                </div>
                <div  className='webdesign-duplex'>
                    <span>07</span>
                    <div className="benef_cont"><h3>Fresh Content</h3>
                    <p>When you are designing your website just use fresh content,don't copy from from other websites.We go back to websites if we know the content will change and there will be new stuff for us to view. Work on a content strategy for your site that will ensure people keep coming back.</p>
                    </div>  
                </div>
                <div className='webdesign-duplex'>
                    <span>09</span>
                    <div className="benef_cont"><h3>Features</h3>
                    <p>Features are the elements that make a site dynamic and interesting, like donation buttons, online forms, embedded video or podcasts, online quizzes, social media buttons/integration, and all other manner of gadgets and widgets.  </p>
                    </div>  
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <div  className='webdesign-duplex'>
                    <span>02</span>
                    <div className="benef_cont"><h3>Target Audiences</h3>
                    <p> If you identify and design to your top two audiences, the site is more likely to accomplish your organization’s goals.</p>
                    </div>  
                </div>
                <div  className='webdesign-duplex'>
                    <span>04</span>
                    <div className="benef_cont"><h3>Responsive</h3>
                    <p>Responsive design means that a website’s design automatically re-sizes to fit the screen size on which it’s being viewed</p>
                    </div>  
                </div>
                <div className='webdesign-duplex'>
                    <span>06</span>
                    <div className="benef_cont"><h3>Engaging Content</h3>
                    <p>It’s a documented fact that people only read about 20-28% of the text on a web page. Hence the shift to shorter blocks of text, lots of photos, and the use of multimedia on websites.</p>
                    </div>  
                </div>
                <div  className='webdesign-duplex'>
                    <span>08</span>
                    <div className="benef_cont"><h3>SEO</h3>
                    <p>SEO optimization is very important to make your websiite loading time less.SEO is the most viable and cost-effective way to both understand and reach customers in key moments that matter.</p>
                    </div>  
                </div>
                <div className='webdesign-duplex'>
                    <span>10</span>
                    <div className="benef_cont"><h3>Site Maintenance</h3>
                    <p>There are two main costs associated with a website design project: the cost of site design and development and ongoing site maintenance costs. </p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  </section>
</>
  )
}
export default  Webdesign;
