const required = (value) => (value ? undefined : "Required")
const minLength = (value) =>
  value.length < 4 ? `Should be greater than 4` : undefined
const emailValid = (value) =>
  value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ? undefined
    : "enter existing email"
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const validators = {
  country: required,
  name: composeValidators(required, minLength),
  email: composeValidators(required, emailValid)
}
