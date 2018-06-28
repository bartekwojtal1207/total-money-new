import React, {Component} from 'react';
import './Footer.css';
import wpLogo from '../../assets/img/wp.png';


class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <ul className="footer__list">
                        <li className="footer__list__item"><a href="#">Polityka prywatności</a></li>
                        <li className="footer__list__item"><a href="#">Regulamin</a></li>
                    </ul>
                    <div className="footer__wp_content">
                        <img src={wpLogo} className="img img-fluid footer__wp_content__logo" alt="WP LOGO"/>
                        <span>Jesteśmy częścią Wirtualna Polska Holding S.A.</span>
                    </div>
                </div>
            </footer>
        )
    }
};


export default Footer
