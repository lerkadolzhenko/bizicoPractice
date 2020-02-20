import React from "react"

export const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <small className='text-danger'>
            {formErrors[fieldName]}
          </small>
        )
      } else {
        return ""
      }
    })}
  </div>
)

export default FormErrors
