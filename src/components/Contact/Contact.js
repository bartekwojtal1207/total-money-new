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
            errorMessage : 'Pole jest wymagane.',

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
                        // fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor fringilla augue porta maximus. Duis faucibus tortor lectus, a ornare tellus facilisis vel'
                    },
                    checked: false,
                    fullConsent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor fringilla augue porta maximus. Duis faucibus tortor lectus, a ornare tellus facilisis vel',
                    fullConsentVisible: false,
                    validation: {
                        required: true
                    },
                    valid: false,
                },
                offertsConsent: {
                    elementType: 'checkbox',
                    elementConfig: {
                        type: 'checkbox',
                        desc: 'Wyrażam zgodę na otrzymywanie'
                    },
                    fullConsent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor fringilla augue porta maximus. Duis faucibus tortor lectus, a ornare tellus facilisis vel',
                    fullConsentVisible: false,
                    checked: false,
                    validation: {
                        required: true
                    },
                    valid: false,
                },
                systemConsent: {
                    elementType: 'checkbox',
                    elementConfig: {
                        type: 'checkbox',
                        desc: 'Wyrażam zgodę na używanie urządzeń końcowych i automatycznych systemów'
                        // fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor fringilla augue porta maximus. Duis faucibus tortor lectus, a ornare tellus facilisis vel'
                    },
                    checked: false,
                    fullConsent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor fringilla augue porta maximus. Duis faucibus tortor lectus, a ornare tellus facilisis vel',
                    fullConsentVisible: false,
                    validation: {
                        required: true
                    },
                    valid: false,
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

    onFocusInputHandler(props, inputId) {
        const contactFormToUpdate  = {
            ...this.state.contactForm
        }, FormElementToUpdate = {
            ...contactFormToUpdate[inputId]
        };

        FormElementToUpdate.touched = true;

        contactFormToUpdate[inputId] = FormElementToUpdate;
        this.setState({ contactForm: contactFormToUpdate })
    }

    showMoreText(event, inputId) {
        const contactFormToUpdate  = {
            ...this.state.contactForm
        }, FormElementToUpdate = {
            ...contactFormToUpdate[inputId]
        };

        (! FormElementToUpdate.fullConsentVisible ? FormElementToUpdate.fullConsentVisible = true : FormElementToUpdate.fullConsentVisible = false );

        contactFormToUpdate[inputId] = FormElementToUpdate;
        this.setState({ contactForm: contactFormToUpdate })
    }



    render() {
        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        const form = <form action="#" className={'contact__form'}>
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
                    fullConsent={formElement.config.fullConsent}
                    fullConsentVisible={formElement.config.fullConsentVisible}
                    errorMessage={this.state.errorMessage}
                    onFocus={(event)=>this.onFocusInputHandler(event, formElement.id)}
                    showMoreText={(event)=>this.showMoreText(event, formElement.id)}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button >WYŚLIJ</Button>
            </form>;

        return(
            <div>
                <section className="col-md-12 contact">
                    <ContactTitle subtitle={this.state.subtitle}>
                        Poznaj szczegóły oferty dla Ciebie <br />Już nawet w 10 minut !
                    </ContactTitle>
                        {form}
                </section>
            </div>
        )
    }
}


export default Contact;