import React, { Component } from "react";
import validator from "validator";
import Input from "../../components/UI/Input/Input";
import classes from "./ContactMe.module.css";

class ContactMe extends Component {
  state = {
    contactForm: {
      name: {
        elementType: "input",
        label: "Your Name",
        config: {
          type: "text",
          placeholder: "Enter your Name"
        },
        validator: {
          maxLength: 15,
          minLength: 3,
          required: true
        },
        value: "",
        touched: false,
        isValid: false
      },
      email: {
        elementType: "input",
        label: "Your Email",
        config: {
          type: "email",
          placeholder: "Enter your email"
        },
        validator: {
          isMail: true,
          required: true
        },
        value: "",
        touched: false,
        isValid: false
      },
      mobile: {
        elementType: "input",
        label: "Your Mobile",
        config: {
          type: "text",
          placeholder: "Enter your mobile number"
        },
        validator: {
          isMobile: true,
          required: true
        },
        value: "",
        touched: false,
        isValid: false
      },
      message: {
        elementType: "textarea",
        label: "Your Message",
        config: {
          placeholder: "Enter your message"
        },
        validator: {
          required: true
        },
        value: "",
        touched: false,
        isValid: false
      }
    },
    formIsValid: false
  };

  checkValidation = (rules, value) => {
    let isValid = true;
    if (rules.required) {
      isValid = !validator.isEmpty(value.trim()) && isValid;
    }
    if (rules.maxLength) {
      isValid =
        validator.isLength(value.trim(), {
          min: 3,
          max: 15
        }) && isValid;
    }

    if (rules.isMail) {
      isValid = validator.isEmail(value.trim()) && isValid;
    }

    if (rules.isMobile) {
      isValid = validator.isMobilePhone(value.trim()) && isValid;
    }
    return isValid;
  };

  onChangeHandler = (event, elementType) => {
    let newContactForm = JSON.parse(JSON.stringify(this.state.contactForm));
    newContactForm[elementType].value = event.target.value;
    newContactForm[elementType].touched = true;
    newContactForm[elementType].isValid = this.checkValidation(
      newContactForm[elementType].validator,
      newContactForm[elementType].value
    );

    let formIsValid = true;

    for (let key in newContactForm) {
      formIsValid = newContactForm[key].isValid && formIsValid;
    }

    this.setState({
      contactForm: newContactForm,
      formIsValid: formIsValid
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    let contactForm = [];
    for (let key in this.state.contactForm) {
      contactForm.push({ key: key, ...this.state.contactForm[key] });
    }
    return (
      <form className="needs-validation" onSubmit={this.onSubmitHandler}>
        <div className="form-row">
          {contactForm.map(item => {
            return (
              <Input
                key={item.key}
                title={item.label}
                inputtype={item.elementType}
                name={item.key}
                id={item.key}
                value={item.value}
                validClassName={item.isValid ? "is-valid" : "is-invalid"}
                touched={item.touched}
                config={item.config}
                changed={event => this.onChangeHandler(event, item.key)}
              />
            );
          })}
        </div>
        <button
          className={`btn shadow ${classes.SubmitBtn}`}
          disabled={!this.state.formIsValid}
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    );
  }
}
export default ContactMe;
