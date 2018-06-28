import React, {Component} from 'react';
import './SecurityInfo.css';
import lock from '../../assets/img/lock.svg';
import cert from '../../assets/img/cert.svg';
import key from '../../assets/img/key.svg';
import SecurityInfoItem from './SecurityInfoItem/SecurityInfoItem';

class SecurityInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            securityInfo: [
                {text: 'Dbamy o bezpieczeństwo Twoich danych', img: lock},
                {text: 'Twoje dane szyfruje i chroni certyfikat SSL', img: cert},
                {text: 'Używamy najbezpieczniejszej metody szyfrowania', img: key}
            ]
        }
    }

    render() {
        const securityInfoListItem = this.state.securityInfo.map((securityInfo, index) =>
            <SecurityInfoItem key={index} img={securityInfo.img}>{securityInfo.text}</SecurityInfoItem>
        );

        return (
            <section className="security">
                <div className="col-md-12 security__container">
                    <ul className="security__list">
                        {securityInfoListItem}
                    </ul>
                </div>
            </section>
        )
    }
}

export default SecurityInfo;