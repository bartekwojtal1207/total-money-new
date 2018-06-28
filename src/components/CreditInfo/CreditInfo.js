import React, { Component } from 'react';
import pkoLogo from '../../assets/img/pko-bp.png';
import './CreditInfo.css';
import CreditInfoItems from './CreditInfoItems/CreditInfoItems';

class CreditInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            creditInfo: [
                {text: 'Kwota kredytu: ', option: '25000 zł'},
                {text: 'Okres spłaty: ', option: '25 lat'},
                {text: 'Rata: ', option: '1227.02 zł'}
            ]
        }
    }

    render() {
        const creditInfoListItem = this.state.creditInfo.map((creditInfo, index) =>
            <CreditInfoItems
                key={index}
                index={index}>
                creditInfoText={creditInfo.text}
                creditOption={creditInfo.option}
            </CreditInfoItems>
        );
        
        return (
            <div>
                <section className="credit">
                    <div className="col-md-12 credit__company">
                        <img src={pkoLogo} className="img img-fluid credit__logo" alt="logo bank"/>
                            <h4 className="text-left credit__title">Kredyt mieszkaniowy Własny Kąt</h4>
                            <span className="text-left credit__bank_name">PKO Bank Polski </span>
                            <span className="credit__raiting"></span>
                    </div>
                    <br/>

                    <div className="credit__info col-md-12">
                        <ul className="credit__info__list">
                            {creditInfoListItem}
                        </ul>
                    </div>
                    <hr className="credit__hr" />
                </section>
            </div>
        )
    }
}


export default CreditInfo;