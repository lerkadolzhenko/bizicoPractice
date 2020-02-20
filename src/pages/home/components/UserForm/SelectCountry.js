import React from "react"
import Error from "./Error"

let SelectCountry = ({ input, id, className, label, options, meta }) => {
  // console.log(meta)
  //   console.log(options)
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select {...input} id={id} className={className}>
        {/* <option value="" selected disabled hidden>
          Choose country
        </option> */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.touched && meta.error && (
        <Error name={input.name} />
      )}
    </div>
  )
}

export default SelectCountry
