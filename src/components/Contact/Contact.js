import React, { Component } from 'react';
import ContactTitle from './ContactTitle/ContactTitle';
import Input from './ContactForm/Input';
import Label from './ContactForm/Label';
import Button from './ContactForm/Button';


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subtitle: 'Wypełnij, formularz, a Doradca z wybranego przez Ciebie banku skontaktuje się z Tobą i dopasuje oferte do Twoich potrzeb.',

            formIsValid : false,
            errorMessage : 'pole jest wymagane',

            contactForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        desc: 'Imię'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                surname: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        desc: 'Nazwisko'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                phone: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'phone',
                        desc: 'Telefon'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touched: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        desc: 'Kod pocztowy'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                agreementConsent: {
                    elementType: 'checkbox',
                    elementConfig: {
                        type: 'checkbox',
                        desc: 'Wyrażam zgodę na przetwarzanie'
                    },
                    checked: false,
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                offertsConsent: {
                    elementType: 'checkbox',
                    elementConfig: {
                        type: 'checkbox',
                        desc: 'Wyrażam zgodę na otrzymywanie'
                    },
                    checked: false,
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                systemConsent: {
                    elementType: 'checkbox',
                    elementConfig: {
                        type: 'checkbox',
                        desc: 'Wyrażam zgodę na używanie urządzeń końcowych i automatycznych systemów'
                    },
                    checked: false,
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }
            }
        }
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputId) => {

        const contactFormToUpdate  = {
            ...this.state.contactForm
        }, FormElementToUpdate = {
            ...contactFormToUpdate[inputId]
        };

        FormElementToUpdate.value = event.target.value;
        FormElementToUpdate.checked = event.target.checked;

        FormElementToUpdate.valid = this.checkValidity(FormElementToUpdate.value, FormElementToUpdate.validation);
        FormElementToUpdate.touched = true;
        contactFormToUpdate[inputId] = FormElementToUpdate;

        let formIsValid = true;

        for (let inputId in contactFormToUpdate) {
            formIsValid = contactFormToUpdate[inputId].valid && formIsValid;
        }

        this.setState({contactForm: contactFormToUpdate, formIsValid: formIsValid});
    };

    showAgreements(event, index) {
        const agreements = this.state.checkboxs;

        if (agreements[index].visibleText === 'block') {
            agreements[index].visibleText = 'none';
            agreements[index].textTitle = 'więcej';
        }else {
            agreements[index].visibleText = 'block';
            agreements[index].textTitle = 'mniej';
        }

        this.setState({ checkboxs: agreements })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        const form = <form action="" className={'contact__form'}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    id={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    checked={formElement.config.checked}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    errorMessage={this.state.errorMessage}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button >WYŚLIJ</Button>
            </form>

                {/*{ ((! input.valid) && (input.isValid)) ?  <span className={'error-message'}> {this.state.errorMessage}</span> : '' }*/}


        //     checbkox = this.state.checkboxs.map((checkbox,index) =>
        //         <div className={( (checkbox.value === 0) && (checkbox.isValid) ) ? 'form-check error-form-check' : 'form-check'} key={index+'form-check'}>
        //             <Label key={index+'label'} forLabel={checkbox.name} classLabel={'form-check-label contact__form__checkbox_label'}>{checkbox.label}</Label>
        //                 <span className={'link-more'} onClick={(event)=> this.showAgreements(event, index)}> [ {checkbox.textTitle} ] </span>
        //                 <span key={index + 'agreements'} className={ checkbox.visibleText === 'none' ? 'text-more-hidden' : 'text-more'}>
        //                     {checkbox.text}
        //                 </span>
        //             <Input
        //                 key={index}
        //                 name={checkbox.name}
        //                 type={checkbox.type}
        //                 id={checkbox.name}
        //                 change={(event)=> this.onChangeCheckboxHandler(event, index)}
        //                 classInput='form-check-input' >
        //             </Input>
        //
        //             <span className={( (checkbox.value === 0) && (checkbox.isValid) ) ? 'checkbox-error' : 'contact__form__check_wrapper__fake_checkbox'} key={index+'span'}> </span>
        //         </div>
        // );
        // if ( (! input.valid) && (input.isValid) ) {
        //     test.push('danger')
        // }
        return(
            <div>
                <section className="col-md-12 contact">
                    <ContactTitle subtitle={this.state.subtitle}>
                        Poznaj szczegóły oferty dla Ciebie <br />Już nawet w 10 minut !
                    </ContactTitle>

                        {form}
                        <div className="contact__form__check_wrapper">
                            {/*{checbkox}*/}
                        </div>
                </section>
            </div>
        )
    }
}

export default Contact;