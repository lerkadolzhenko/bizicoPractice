import { Field } from "react-final-form"
import React from "react"

export const Error = ({ name }) => {
  return (
    <small className="text-danger">
      <Field name={name} subscription={{ error: true }}>
        {({ meta: { error } }) => (error ? <span>{error}</span> : null)}
      </Field>
    </small>
  )
}
export default Error
