import React from 'react';
const Cardano = () =>
{
  return (
    <>
    <section className='cardano-banner'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className='mobile-banner-left'>
              <h3 className='mobile-text'>Being a Professional <br/>Cardano India Developers</h3>
              <p>Cardano's native cryptocurrency is called ADA, and it is used for transactions and as a means of payment for services on the Cardano network. </p>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-end">
            <div className='web-banner-right'>
              <img src={require('./../assets/cardanoban1.png')} alt="cardanobanner"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
export default Cardano;
