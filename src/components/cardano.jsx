import React from 'react';
import Accordion from './Accordion';
const Cardano = () => {
  const accordionData = [
    {
      title: 'What Is Cardano?',
      content: `Cardano is a blockchain and ADA is the coin that powers the Cardano network. This is similar in some ways to ether and the Ethereum blockchain.`
    },
    {
      title: 'What is Cardano used for?',
      content: `The Cardano blockchain can be used to build smart contracts and, in turn, create decentralised applications and protocols. In addition, the ability to send and receive funds instantly for minimal fees has many applications in the world of business and finance.`
    },
    {
      title: 'How Does Cardano Work?',
      content: `With a blockchain network, there needs to be a way to verify transactions to ensure people don’t spend the same tokens twice. Given the decentralization, there’s no central authority like a bank working  to handle the job.`
    },
    {
      title: 'How to Buy Cardano?',
      content: `You do not buy Cardano itself but rather its altcoin, ADA. To buy ADA, you can sign up for an account with one of the major cryptocurrency exchanges. You can then store ADA either on the platform itself or in a crypto wallet.`
    },
    {
      title: 'Where to Buy Cardano',
      content: `As one of the most popular cryptocurrencies, you can buy ADA for the Cardano network from most top cryptocurrency exchanges. Binance, Coinbase, Gemini and Kraken are a few of the major players that sell ADA. To help find a good fit, check out this review and compare the best crypto exchanges.`
    }
  ];
  return (
    <>
    <section className='cardano-banner'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className='mobile-banner-left'>
              <h3 className='mobile-text'>Being a Professional <br/>Cardano India Developers</h3>
              <p>We are team of developers.We are just helping startups and Enterprises in Embracing Technologies That bring the highest values.</p>
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
    <div className='working'>
        <div className='container'>
        <div className='row'>
        <div className="col-md-12">
          <h2 className='why-us-h3'>PIONEER LEARNING</h2>
        </div>
        </div>
            <div className='row'>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                              <img src={require('./../assets/haskell.png')} alt="haskell"/>
                            </div>
                            <h3>Haskell</h3>
                            <p className="paragraph">An advanced, purely functional programming language.Haskell is being used in the Network Security division to automate processing of internet abuse complaints. Haskell has allowed us to easily meet very tight deadlines with reliable results. Haskell is being used for backend data transformation and loading.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                      <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/atala-prism.png')} alt="atala-prism"/>
                            </div>
                            <h3>Atala Prism</h3>
                            <p className="paragraph">Atala PRISM is a decentralized identity solution built on the Cardano blockchain. It creates a new approach to identity management, where users own their identity and have complete control over how their personal data is used and accessed.</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/plutus.png')} alt="Plutus"/>
                            </div>
                            <h3>Plutus</h3>
                            <p className="paragraph">Plutus is the smart contract platform of the Cardano blockchain. It allows you to write applications that interact with the Cardano blockchain..</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate">
                <div className="technology">
                            <div className="impactIcon">
                            <img src={require('./../assets/marlowe.png')} alt="Marlowe"/>
                            </div>
                            <h3>Marlowe</h3>
                            <p className="paragraph">Marlowe is a special purpose language designed to allow anyone to write and execute P2P financial contracts on any blockchain.</p>
                        </div>
                        </div>
            </div>
        </div>
    </div>
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
export default Cardano;
