import React from "react"
import { Form, Field } from "react-final-form"
import InputText from "./InputText"
import SelectCountry from "./SelectCountry"
import "./userForm.scss"
import { validators } from "./validator"

const UserForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <Field
                validate={validators.name}
                className="form-control"
                name="firstName"
                type="textField"
                id="firstName"
                placeholder="First name"
                label="First name"
                component={InputText}
              />
            </div>
            <div className="form-group col-md-6">
              <Field
                validate={validators.name}
                name="lastName"
                className="form-control"
                type="textField"
                placeholder="Last name"
                label="Last name"
                id="lastName"
                component={InputText}
              />
            </div>
          </div>

          <div className="form-group">
            <Field
              validate={validators.email}
              type="email"
              name="email"
              className="form-control"
              id="email"
              label="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              component={InputText}
            />
          </div>

          <div className="form-group">
            <Field
              validate={validators.country}
              name="country"
              className="custom-select"
              id="selectCountry"
              label="Select country"
              component={SelectCountry}
              options={[
                { label: "Show All", value: "all" },
                { label: "Russia", value: "ru" },
                { label: "Ukraine", value: "ua" },
                { label: "Germany", value: "de" },
                { label: "Austria", value: "au" }
              ]}
            />
          </div>

          <div className="form-group">
            <Field
              validate={validators.name}
              type="comment"
              name="comment"
              className="form-control"
              id="textarea"
              label="Comment"
              aria-describedby="Comment"
              placeholder="Enter comment"
              component={InputText}
            />
          </div>

          {/* <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label> */}

          <button
            type="submit"
            value="Submit"
            className="btn btn-primary"
            disabled={submitting || pristine}>
            Submit
          </button>
        </form>
      )}
    />
  )
}

export default UserForm
