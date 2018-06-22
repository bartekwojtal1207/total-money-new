import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Header from '../components/Header/Header';
import CreditInfo from '../components/CreditInfo/CreditInfo';
import SecurityInfo from '../components/SecurityInfo/SecurityInfo';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer'
{console.log(window.innerWidth)}

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                    <Header/>
                      {window.innerWidth < 500 ? <Contact/> : ''}
                      <CreditInfo/>
                      <SecurityInfo/>
                  </div>
                  <div className="col-md-6 col-xs-12">
                      {window.innerWidth > 500 ? <Contact/> : ''}

                  </div>
              </div>
          </div>
          <Footer/>
      </div>

    );
  }
}

export default App;
