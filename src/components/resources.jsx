import React from 'react';
import { NavLink } from 'react-router-dom';
const Resources = () =>
{
  return (
    <>
    <section class="technology_banner">
    <div class="container-fluid">
        <img src={require('./../assets/cpu.png')} alt="technology-banner"/>
        <h2>Technologies</h2>
    </div>
    </section>  
    <section className='all-tech'>
    <div className='container'>
      <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>Front end Engineering</h3>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/angular.png')} alt=" angular technology-banner"/>
                    </div>
                    <p>Angular</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/React-icon.png')} alt="react technology-banner"/>
                    </div>
                    <p>React</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/vue.png')} alt="Vue technology-banner"/>
                    </div>
                    <p>Vue</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/html-5.png')} alt="html technology-banner"/>
                    </div>
                    <p>HTML</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/css-3.png')} alt="css-3 technology-banner"/>
                    </div>
                    <p>Css</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/js.png')} alt="JS technology-banner"/>
                    </div>
                    <p>Js</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/bootstrap.png')} alt="Bootstrap technology-banner"/>
                    </div>
                    <p>Bootstrap</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/typescript.png')} alt="Typescript technology-banner"/>
                    </div>
                    <p>Typescript</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/sass.png')} alt="Sass technology-banner"/>
                    </div>
                    <p>Sass</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/jquerypro.png')} alt="JQuery technology-banner"/>
                    </div>
                    <p>JQuery</p>
                </div>
                </div>
            </div>
      </div>
      <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>Backend Engineering</h3>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/python.png')} alt="python technology-banner"/>
                    </div>
                    <p>Python</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/nodejs.png')} alt="node technology-banner"/>
                    </div>
                    <p>Node</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/php.png')} alt="php technology-banner"/>
                    </div>
                    <p>Php</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/mogodb.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>MongoDB</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/elastic.png')} alt="elastic technology-banner"/>
                    </div>
                    <p>Elastic</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/ruby.png')} alt="Ruby technology-banner"/>
                    </div>
                    <p>Ruby</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/mysql.png')} alt="mysql technology-banner"/>
                    </div>
                    <p>Mysql</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/kotlin-logo.png')} alt="kotlin technology-banner"/>
                    </div>
                    <p>kotlin</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/spring.png')} alt="Spring technology-banner"/>
                    </div>
                    <p>Spring</p>
                </div>
                </div>
            </div>
      </div>
      <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>Mobility</h3>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/kotlin-logo.png')} alt="kotlin technology-banner"/>
                    </div>
                    <p>Kotlin</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/java.png')} alt="Java technology-banner"/>
                    </div>
                    <p>Java</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/flutter.png')} alt="flutter technology-banner"/>
                    </div>
                    <p>Flutter</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/swift.png')} alt="Swift technology-banner"/>
                    </div>
                    <p>Swift</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/native.png')} alt="native technology-banner"/>
                    </div>
                    <p>React Native</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/android_logo.png')} alt="android technology-banner"/>
                    </div>
                    <p>Android</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/apple.png')} alt="IOS technology-banner"/>
                    </div>
                    <p>IOS</p>
                </div>         
                </div>
            </div>
      </div>
      <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>IOT</h3>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/ardunio.png')} alt="arduino technology-banner"/>
                    </div>
                    <p>Arduino</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/azureiot.png')} alt="azureiot technology-banner"/>
                    </div>
                    <p>Azure IoT</p>
                </div>
                </div>
            </div>
      </div>
    </div>
    </section>
    </>
  )
}
export default Resources;
