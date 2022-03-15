import React from "react"

const initialValue = {
  setIstoggle: (toggle: boolean) => {},
  isToggle: false
}

const cardReducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isToggle: action.payload }
    default:
      return state
  }
}

const ExpCardContext = React.createContext(initialValue)

const ExCardProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(cardReducer, {
    isToggle: initialValue.isToggle
  })
  const setIstoggle = (toggle: any) => {
    dispatch({
      type: "TOGGLE",
      payload: toggle
    })
  }

  return (
    <ExpCardContext.Provider value={{ isToggle: state.isToggle, setIstoggle }}>
      {props.children}
    </ExpCardContext.Provider>
  )
}

export { ExpCardContext, ExCardProvider }
