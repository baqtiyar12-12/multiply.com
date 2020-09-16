import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import hand from  './hand.png';
import icon from  './icon.png';
import laptop from  './laptop.png';

//create react components 

// logo image

function Logo(props) {
    return (
 
        <>
            <div className="cf logo-container">
            <figure id="logo" className="col16 fl">
            <img src={icon} className="responsive" />
            </figure>
            <p className="col45 fl">MULLTIPLY.COM</p>
        </div> 
        </>
       
    )
}

// laptop image

function Laptop(props) {
    return (
 
        <>
          <div id="laptop-container" className="col45 center">
            <img className="responsive" src={laptop} />
        <article className="col45 center">
            <figure className="col13">
            <img className="responsive" src={icon} />
            </figure>
            <p className="full">Your time is precious, which is why you would like to delegate investment to an experienced investment professional. </p>
        </article>
        <figure id="hand" className="col25">
        <img className="responsive" src={hand} />
        </figure>
        <div id="green-bar-top" className="green-bar col116"></div>
        <div id="green-bar-bottom" className="green-bar col116"></div>
        <div id="thin-blue-bar" class="col120"></div>
        </div>
        </>
       
    )
}

function Account(props) {
    return (
    
    <>
    <article id="account" class="full">
        <h2 class="col34"> No account minimums, no hidden fees </h2>
        <p> Your relationship manager will take the time to fully understand your situtation, personal and financial, to ensure that your investment strategy
        </p>
    </article>
        </>
    
    
    
    )
}


function CryptoAssetManagement(props) {
    return (
    <article className="info col13">
     <h2>Why Crypto Asset Management is the Next Big Thing</h2>
     <p>
     Investors are increasingly looking to add a bit of cryptocurrency, such as Bitcoin, to diversify their portfolios and capture some of the potential upsides of this new asset class. <br/><br/><br/>
     
     Cryptocurrencies, however, can be esoteric and difficult to graps for new adopters and many ordinary investors - including how to establish a wallet and transfer tokes securely. <br/><br/><br/>
     
     As a result, crypto asset management solutions are being created to help individuals and firms alike take advantante of crypto without havingn to worry about the ins and outs of technica lprocedures invloved. 
     </p>
     </article>
    
    
    )
}

function HowItWorks(props) {
    return (
    
        <h1>How It Works</h1>
        
    )
}

function Diversification(props) {
    return (
    
        <>
        <div className="fl full"><div className="blue-circle col112 fl"></div>
        <div className="outerdiv col18 fl">
        <div className="col45 center innerdiv"></div>
        </div>
        <sup className="fl">CLIENT</sup><br/></div>
        <br/><br/><br/>
         <div className="fl full"><div className="vline fl"></div>
        <div id="multiply" className="outerdiv col18 fl">
        <figure className="col45 center innerdiv"><img class="responsive" src={icon} /></figure>
        </div>
        <p className="fl">MULTIPLY.COM</p><br/></div>
        <div className="full">
            <div className="blue-circle col112 fl"></div>
            <div className="hline fl"></div>
            <div id="four-dots" className="fl">
        <div id="small-dot-one" className="small-dot"></div>
        <div id="small-dot-two" className="small-dot"></div>
        <div id="small-dot-three" className="small-dot"></div>
        <div id="small-dot-four" className="small-dot"></div>
        </div>
        <p className="col13 fl"> PORTFOLIO DIVERSIFICATION </p>
        </div>
        </>
    )
}

function TradeList() {
   return (
       
       <>
        <ul className="tradelist col18">
            <li>TRADING</li>
            <li>STAKING</li>
            <li>SAVING</li>
            <li>CUSTODY</li>
            <li>DEFI</li>
        </ul>
        </>
   
   )
}

function Scale(props) {
    return(
    
        <>
        <div id="scale" className="col15 cf">
        
        <div className="full">
        <div class="fl col13 box-inner">3</div>
        <div class="fl col13 box-inner">2</div>
        <div class="fl col13 box-inner">1</div>
        </div>
        
        <div className="full">
        <div class="fl  circle-A"></div>
        <div class="fl  circle-A"></div>
        <div class="fl  circle-A"></div>
        </div>
        
        <div className="full scale-A">
        <p className="col13 fl">A</p>
        <p className="col13 fl">A</p>
        <p className="col13 fl">A</p>
        </div>
        
        <div className="full">
        <div class="fl circle-B"></div>
        <div class="fl circle-B"></div>
        <div class="fl circle-B"></div>
        </div>
        
        <div className="full scale-A">
        <p className="col13 fl">B</p>
        <p className="col13 fl">B</p>
        <p className="col13 fl">B</p>
        </div>
        
           <div className="full">
        <div class="fl circle-C"></div>
        <div class="fl circle-C"></div>
        <div class="fl circle-C"></div>
        </div>
        
        <div className="full scale-A">
        <p className="col13 fl">C</p>
        <p className="col13 fl">C</p>
        <p className="col13 fl">C</p>
        </div>
        
           <div className="full">
        <div class="fl circle-D"></div>
        <div class="fl circle-D"></div>
        <div class="fl circle-D"></div>
        </div>
        
        <div className="full scale-A">
        <p className="col13 fl">D</p>
        <p className="col13 fl">D</p>
        <p className="col13 fl">D</p>
        </div>
        </div>
        </>
    
    
    )
}


function Speciality() {
    return (
    
    <>
        <ul id="speciality">
        <li>PROJECT RESEARCH</li>
        <li>TECHNICAL ANALYSIS</li>
        <li>FUNDAMENTAL ANALYSIS</li>
        <li>MARKET SENTIMENT ANALYSIS</li>
        <li>EVENT BASED CALLS</li>
        <li>RISK MANAGEMENT</li>
        <li>TRADE SETUPS</li>
        </ul>
        </>
    
    
    )
}

function HardwareWallet() {
    return (
    
    <> 
        <div id="hardware-wallet" className="col14"><p className="full">HARDWARE WALLET</p></div>
        

        </>
    
    )
}



function CircleLineTop(props) {
    return(
    <>
        <div className="circle-row col13 cf">
        <div id="second-icon-box" className="col16 fl">
        <figure className="full">
        <img src={icon} className="responsive" />
        </figure>
        </div>
        <div className="blue-circle-two col112 fl"></div>
        <div className="pink-circle col112 fl"></div>
        <div className="pink-circle col112 fl"></div>
        <div className="pink-circle col112 fl"></div>
        <div className="pink-circle col112 fl"></div><br/><br/><br/>
        <p className="col18 fl">xxxxxxxxxxx</p>
        </div>
        </>
    
    
    )
} 


function CircleLineTopTwo(props) {
    return(
    <>
        <div id="circle-row-two" className="circle-row col13 cf">
        <div className="outerdiv col18 fl">
        <div className="col45 center innerdiv"></div>
        </div>
        <div className="pink-circle col112 fl"></div>
        <div className="blue-circle-two col112 fl"></div>
        <div className="blue-circle-two col112 fl"></div>
        <div className="blue-circle-two col112 fl"></div>
        <div className="blue-circle-two col112 fl"></div><br/><br/><br/>
        <p className="col18 fl">PROFIT</p>
        </div>
        </>
    
    
    )
} 


function ContactForm(props) {
    return (
    
        <>
        <div id="form" >
        <h3>Say Hello to start your crypto journey!</h3>
        <form action="post">
        <input class type="text" value="NAME"/>
        <input class type="email" value="EMAIL ID"/>
        <input type="submit" value="SUBMIT"/>
        </form>
        <div className="thin-turquoise-bar"></div>
        </div>
        </>
    
    
    )
}




function App() {
    
 return (
     <main className="container">
     <Logo />
     <Laptop/>
     <div id="sideBar" className="col14">
     <Account />
     <Account />
     <Account />
     <div id="green-bar-two" className="col12"></div>
     <div id="blue-bar" className="col16"></div>
     <div id="bottom-green-bar"></div>
     <div id="red-side-bar" className="col16"></div>
     <div id="orange-sidebar" className="col16"></div>
     <div id="small-blue-bar" className="col18"></div>
     </div>
     <CryptoAssetManagement/>
     <article id="how-it-works">
        <HowItWorks />
     </article>
     <article id="diversification" class="col13 cf">
    <Diversification />
     </article>
        <TradeList />
     <Scale/>
     <Speciality />
     <HardwareWallet />
     <CircleLineTop />
     <CircleLineTopTwo />
     <ContactForm />
     <div className="thick-blue-bar"></div>
     </main>
 )
}


ReactDOM.render(<App />, document.getElementById("root"))

