import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import CreditInfo from '../components/CreditInfo/CreditInfo';
import SecurityInfo from '../components/SecurityInfo/SecurityInfo';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                    <Header/>
                      <CreditInfo/>
                      <SecurityInfo/>
                  </div>
                  <div className="col-md-6">
                        <Contact/>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>

    );
  }
}

export default App;
