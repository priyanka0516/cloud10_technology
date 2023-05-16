
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from './components/services';
import Footer from './components/footer';
import Mobileapp from './components/mobile-app';
import Webapp from './components/web-app';
import Webdesign from './components/web-design';
import Artificial from './components/artificial';
import Blockchain from './components/blockchain';
import About from './components/about';
import Resources from './components/resources';
import Contact from './components/contactus';
import Flutter from './components/flutter';
import Iot from './components/iot';
import Cardano from './components/cardano';
import Quantum from './components/quantum';
import ScrollToTop from './components/Scrolltotop';
import Product from './components/product';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/mobileapp" element={<Mobileapp/>}/>
        <Route path="/webapp" element={<Webapp/>}/>
        <Route path="/webdesign" element={<Webdesign/>}/>
        <Route path="/blockchain" element={<Blockchain/>}/>
        <Route path="/ainetwork" element={<Artificial/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/flutter" element={<Flutter/>}/>
        <Route path="/iot" element={<Iot/>}/>
        <Route path="/cardano" element={<Cardano/>}/>
        <Route path="/quantum" element={<Quantum/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
