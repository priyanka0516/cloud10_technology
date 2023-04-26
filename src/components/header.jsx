import React,{Component} from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navExpanded: false
    };
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }
  
  render() {
  return (
        <>
        <div className="top-bar" id="top">
            <div className="container">
              <div className='row'>
                <div className='col-lg-12 col-xs-12 pull-right'>
                <div className="subheader">
                    <div id="phone" className="pull-left">
                    <img className='top-img'src={require("./../assets/phone.png")}alt="phone"/>
                            6371499414
                    </div>
                    <div id="open" className="pull-left" style={{marginLeft:'10px'}}>
                    <img className='top-img'src={require("./../assets/open.png")}alt="phone"/>
                            Opening 7am-9pm
                    </div>
                    <div id="email" className="pull-right">
                    <img className='top-img' src={require("./../assets/email.png")}alt="email"/>
                    info@cloud10hospitality.com
                    </div>
                </div>
                </div>
              </div>
            </div>
        </div>
        <Navbar bg="white"sticky="top"  variant="dark" expand="lg" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Container>
        <Navbar.Brand><img src={require('./../assets/logo.png')} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" onClick={this.setNavClose}>
            <Link to="/"  id="navbar-head" className='active'>Home</Link>
            <Link to="about" id="navbar-head">About</Link>
            <Link to="service"id="navbar-head">Services</Link>
            <Link to="contact"id="navbar-head">Contact</Link>
            <Link to="resources"id="navbar-head">Resources</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
  }
}

