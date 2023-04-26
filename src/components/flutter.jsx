import React from 'react';
import Accordion from './Accordion';
const Flutter =()=>
{
    const accordionData = [
        {
          title: 'What is Flutter development?',
          content: `UI/UX design ensures a better experience for its users, leading to customer satisfaction and happiness. Both UI/UX make it easy for users to easily interact, access and use the application and system screens. Furthermore, with the advent of increasing digital tools and automated systems, UI/UX designing ensures that these tools and applications are not only user-friendly but also effective in terms of their use and purpose. `
        },
        {
            title: 'Why will Flutter change mobile development for the better?',
            content: `It is one of the technologies that have pushed forward cross-platform app development. Cross-platform solutions are becoming more popular thanks to their many fans and strong community. `
          },
          {
            title: 'who is a Flutter Developer?',
            content: `A Flutter developer builds a cross-platform app using one codebase available on Android and iOS using Flutter.`
          },
        {
          title: 'How does Flutter differ for app development?',
          content: `With Flutter, developers can create cross-platform applications that run on iOS and Android devices. It can be used to validate your idea or launch new features quickly. UI coding and hot reloading are made easier with the SDK's ready-made widgets. These two features enable developers to code faster with Flutter.`
        },
        {
            title: 'Can Flutter be used to develop MVPs?',
            content: `The answer is yes. When it comes to MVP development, Flutter is very cost-effective. With Kotlin and Swift, you can build iOS and Android apps faster than using native Kotlin and Swift. Flutter can save you 40-50%.`
          },
      ];
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
export default  Flutter;
