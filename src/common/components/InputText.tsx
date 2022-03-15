import React from "react"

interface IValidationSchema {
  required?: boolean
  type?: string
}

interface IError {
  errors: { field: any; message: string }
}

interface IInputTextProps {
  label: string
  props?: any
  name: string
  id?: string
  validationSchema?: IValidationSchema
  onChangeHandler?: (e: any) => void
  value: string
  placeholder?: string | undefined
}

const styles = {
  inputTextStyle: " border-b pb-1 outline-none text-sm text-gray-600 mb-4"
}

const InputText: React.FC<IInputTextProps> = ({
  label,
  name,
  id,
  onChangeHandler,
  value,
  placeholder,
  validationSchema,

  ...props
}) => {
  const [error, setError] = React.useState(false)

  const changeHandler = (e: any) => {
    if (validationSchema?.required) {
      if (e.target.value === "") {
        setError(true)
        let err = {
          errors: [{ field: e.target.name, message: "message" }]
        }
        // setErrors && setErrors(err)
      } else {
        setError(false)
        //onChangeHandler && onChangeHandler(e)
      }
    } else {
      setError(false)
      //onChangeHandler && onChangeHandler(e)
    }
    onChangeHandler && onChangeHandler(e)
  }

  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-800 font-medium" htmlFor={id || name}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
        {...props}
        className={`${styles.inputTextStyle} ${
          error ? "border-red-400" : "border-gray-400"
        }`}
      />
    </div>
  )
}

export default InputText
