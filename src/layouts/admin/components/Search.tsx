import React from "react"

const styles = {
  divClass: "transition-width duration-300 mr-5",
  inputClass:
    "transition-width duration-300  border-gray-400 border-solid border p-1 rounded outline-none"
}

const Search = () => {
  const [inputClick, setInputClick] = React.useState(false)

  const handleOnFocus = () => {
    setInputClick(true)
  }
  const handleOnBlur = () => {
    setInputClick(false)
  }
  return (
    <div className={`${styles.divClass} ${inputClick ? "w-1/2" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className={`${styles.inputClass} ${inputClick ? "w-full" : ""}`}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </div>
  )
}

export default Search
