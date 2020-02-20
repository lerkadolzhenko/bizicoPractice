import React from "react"
import Error from "./Error"

let InputText = ({
  input,
  className,
  id,
  placeholder,
  label,
  meta,
  ...rest
}) => {
  //   console.log(rest)
  //   console.log(input)
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        {...input}
        id={id}
        className={className}
        placeholder={placeholder}
      />
      {meta.touched && meta.touched && meta.error && (
        <Error name={input.name} />
      )}
    </div>
  )
}

export default InputText
