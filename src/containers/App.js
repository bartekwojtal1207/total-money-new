import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Header from '../components/Header/Header';
import CreditInfo from '../components/CreditInfo/CreditInfo';
import SecurityInfo from '../components/SecurityInfo/SecurityInfo';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    updateDimensions() {
        let update_width  = window.innerWidth;
        this.setState({ width: update_width});
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

  render() {
        let widthScreen = this.state.width;
        console.log(widthScreen)
    return (
      <div className="App">
          <div className="container" style={{marginBottom: '50px'}}>
              <div className="row">
                  <div className="col-md-6">
                    <Header/>
                      {widthScreen <= 767 ? <Contact/> : ''}
                      <CreditInfo/>
                      <SecurityInfo/>
                  </div>
                  <div className="col-md-6 col-xs-12">
                      {widthScreen > 767 ? <Contact/> : ''}
                  </div>
              </div>
          </div>
          <Footer/>
      </div>

    );
  }
}

export default App;
