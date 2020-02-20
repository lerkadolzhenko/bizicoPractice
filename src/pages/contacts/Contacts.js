import React from "react"
import FormErrors from "./components/FormErrors"

class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    sex: "",
    formErrors: { firstName: "", lastName: "", email: "", country: "" },
    emailValid: false,
    firstNameValid: false,
    lastNameValid: false,
    countryValid:false,
    formValid: false
  }

  handleUserInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField=(fieldName, value) =>{
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let firstNameValid = this.state.firstNameValid
    let lastNameValid = this.state.lastNameValid
    let countryValid = this.state.countryValid

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid
          ? ""
          : "please input valid email"
        break
      case "firstName":
        firstNameValid = value.length >= 6
        fieldValidationErrors.firstName = firstNameValid
          ? ""
          : "first name too short"
        break
      case "lastName":
        lastNameValid = value.length >= 6
        fieldValidationErrors.lastName = lastNameValid
          ? ""
          : "last name is too short"
        break
      case "country":
        countryValid = value.length > 0
        fieldValidationErrors.country = countryValid ? "" : "select value!"
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        countryValid: countryValid
      },
      this.validateForm
    )
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.countryValid
    })
  }

  render() {
    return (
      <div className="col-md-10 mx-auto">
        <h1 className="py-2" align="center">
          This is HomePage
        </h1>

        <form className='pb-3'>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                value={this.state.firstName}
                onChange={this.handleUserInput}
                type="text"
                name="firstName"
                className="form-control"
                id="firstName"
                placeholder="Enter first name"
              />
              <FormErrors formErrors={this.state.formErrors.firstName} />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                value={this.state.lastName}
                onChange={this.handleUserInput}
                type="text"
                name="lastName"
                className="form-control"
                id="lastName"
                aria-describedby="emailHelp"
                placeholder="Enter last name"
              />
              <FormErrors formErrors={this.state.formErrors.lastName} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleUserInput}
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <FormErrors formErrors={this.state.formErrors.email} />
          </div>

          <div
            className="
          form-group">
            <label htmlFor="selectCountry">Select Country</label>
            <select
              value={this.state.country}
              onChange={this.handleUserInput}
              name="country"
              className="custom-select"
              id="selectCountry">
              <option value="ua">Ukraine</option>
              <option value="de">Germany</option>
              <option value="ru">Russia</option>
              <option value="au">Austria</option>
            </select>
            <FormErrors formErrors={this.state.formErrors.country} />
          </div>

          <h6 align="center">Sex</h6>
          <div className="row pl-3 ">
            <div className="form-check col-md-6" align="right">
              <input type="checkbox" className="form-check-input" id="male" />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check col-md-6">
              <input type="checkbox" className="form-check-input" id="female" />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              placeholder="Comment goes here..."
              id="comment"
              className="form-control"
              aria-label="With textarea"></textarea>
          </div>

          <button
            type="submit"
            value="Submit"
            className="btn btn-primary mx-auto"
            disabled={!this.state.formValid}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default Contact
