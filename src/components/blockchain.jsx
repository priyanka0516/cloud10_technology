import React from 'react';
import Accordion from './Accordion';
const Blockchain =()=>
{
  const accordionData = [
    {
      title: 'What do you mean by “Blockchain”?',
      content: `A Blockchain can be summed up as a continuously creating ledger(file) that keeps an immutable record of the multitude of trades that have taken put, in a protected, ordered, and super durable way. It tends to be used for the solid trade of money, property, contracts, and so on without requiring an outsider middle person like a bank or government.`
    },
    {
      title: 'What are the basics of blockchain?',
      content: `Blockchain overview. Blockchain defined: Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).`
    },
    {
      title: 'What are 2 key concepts of blockchain?',
      content: `For those looking to evaluate the value of blockchain technology to their business, there are four key concepts to understand: connectivity, decentralization, immutability and automation. By understanding these concepts, businesses can come to an informed understanding of the power blockchain technology presents.`
    },
    {
      title: 'How much data can be stored on blockchain?',
      content: `This means that they have to download the whole 250 GB of blockchain data containing the block headers and transactions. More so, the current bitcoin blockchain size limit is 1 MB. However, some of the space within this limit is not usable. So, you will have to work with the bitcoin blockchain size limit just as it is.`
    },
    {
      title: 'Where blockchain is stored?',
      content: `The blockchain is stored on a network of computers (nodes) that participate in the validation and verification of transactions. Each node maintains a copy of the entire blockchain, which is continually updated as new transactions are added to the network.`
    }
  ];
  return (
    <>
       <div className='blockchain-banner'>
        <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                    <h3 className='mobile-text'>A Leading BlockChain<br/> Development  Company</h3>
                    <p>With our proven expertise in blockchain technologies, we build solutions that are highly secure, transparent, yet scalable.
                    </p>
                    {/* <div className='mt-3'>
                        <NavLink to="/service" className='btn-get-started'>Get Started</NavLink>
                    </div> */}
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end">    
                <div className='web-banner-right'>
                    <img src={require('./../assets/bb1.webp')} alt="blochchain-back" id="animated"/>
                </div>
            </div>
            </div>
        </div>
    </div>
  <div className='ai-service'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='section-heads'>
            <h3 className='why-us-h3'>What Blockchain do</h3>
            <p className='custom-paragraph'>A blockchain is “a distributed database that maintains a continuously growing list of ordered records, called blocks.” These blocks “are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. A blockchain is a decentralized, distributed and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.</p>
          </div>
        </div>
      </div>
        <div className='row py-3'>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/health-insurance.png')} alt="health-insurance"/>
                <h2>Blockchain Application Development</h2>
                <p className='paragraph'>With profound knowledge and experience in developing and managing decentralized solutions, we build business processes highly secure, transparent and globally accessible.
                We have already developed apps for Games, Exchanges, Wallets, Finance, real estate, healthcare industries &amp; for IoT startups.</p>
            </div>
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/ecommerce.png')} alt="ecommerce"/>
                <h2>Fintech Application Development</h2>
                <p className='paragraph'>or banking, asset management, insurance, and other domains, we do Fintech Blockchain app development services that are centered on security, performance, and automation. Our apps provide the best customer experience while making the process faster and smoother.</p>
            </div> 
            </div>
            <div className='col-md-4'>
            <div className='ai-box'>
            <img src={require('./../assets/hacker.png')} alt="hacker"/>
                <h2>Blockchain Development Solutions</h2>
                <p className='paragraph'>We help you create reliable, trusted, and sustainable solutions for your business growth. Our blockchain development technology experts are ready to build your cross border payment mechanism, identity protection, and more.</p>
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
            <h3 className='why-us-h3'>Benefits Of Blockchain</h3>
          </div>
        </div>
      </div>
        <div className='row py-3'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <div className='benefits-blockchain-duplex'>
                    <span>01</span>
                    <div className="benef_cont"><h3>Efficiency</h3>
                    <p>The efficiency of using blockchain technology depends on various factors such as the type of blockchain, the purpose of its use, and the specific application being built.</p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>02</span>
                    <div className="benef_cont"><h3>Transparency</h3>
                    <p>One of the key features of blockchain technology is transparency. When transactions are recorded on a blockchain, they are visible to all participants in the network, and each participant can see every transaction that has taken place. </p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>03</span>
                    <div className="benef_cont"><h3>Security</h3>
                    <p>Security is one of the most important aspects of blockchain technology. Since blockchain is a distributed and decentralized system, it is essential to ensure that the network is secure and that data stored on the blockchain cannot be compromised.</p>
                    </div>  
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <div className='benefits-blockchain-duplex'>
                    <span>04</span>
                    <div className="benef_cont"><h3>Network Distribution</h3>
                    <p>Network distribution is a crucial aspect of blockchain technology that enables it to operate as a decentralized and trustless system. When a blockchain network is distributed, it means that there is no central authority controlling the network, and all participants in the network have an equal say in the decision-making process.</p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>05</span>
                    <div className="benef_cont"><h3>Availabilty</h3>
                    <p>Availability is a critical aspect of blockchain technology that ensures that the network is always accessible and operational.</p>
                    </div>  
                </div>
                <div className='benefits-blockchain-duplex'>
                    <span>06</span>
                    <div className="benef_cont"><h3>Automation</h3>
                    <p>Automation is a crucial aspect of blockchain technology that can simplify and streamline many processes, making them faster, more accurate, and more efficient.</p>
                    </div>  
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
export default  Blockchain;
