import React from 'react';
const Flutter =()=>
{
  return (
    <>
    <div className='flutter-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>Leading Flutter Application<br/>Development Company</h3>
                    <p>Develop natively compiled mobile, web, and desktop experiences with us.</p>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end">
                <div className='web-banner-right'>
                    <img src={require('./../assets/flutter.png')} alt=""/>
                </div>
            </div>
            </div>
        </div>
    </div>
    <section className='flutter-apps'>
        <div className='container'>
            <div className='row smooth-apps'>
                <div className="col-md-6">
                    <h2>Build Smooth Apps<br/> With Flutter App<br/> Development Services</h2>
                    <p>You shouldn't limit your digital product idea to mobile phones. Flutter is an open-source mobile application development framework created by Google. It allows developers to create high-quality, visually attractive, and fast mobile apps for both iOS and Android platforms using a single codebase</p>
                </div>
                <div class="col-md-6">
                    <div class="under-smooth under-smooth-1">
                        <h6>Flutter development for iOS &amp; android</h6>
                        <p>Our hybrid mobile app developers build your iOS and Android apps in an industry-leading framework like IBM Worklite, Flutter, Sencha, and Kendo UI.</p>
                    </div>
                    <div class="under-smooth under-smooth-2">
                        <h6>Dart app development</h6>
                        <p>Combine applications for easier coding and support and switch from other technologies to a well-known hybrid framework.</p>
                    </div>
                    <div class="under-smooth under-smooth-3">
                        <h6>Flutter for web development</h6>
                        <p>With Flutter, you can now reach more customers since it supports desktop-class apps running on different OSes. Web users will enjoy the advantages of a sober UI with Flutter for Web.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
export default  Flutter;
