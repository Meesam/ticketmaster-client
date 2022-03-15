import React from "react"

export interface IItem {
  title: string
  isSelected: boolean
  icon: string
}

interface IInitialVale {
  menuItem: IItem[]
  selectItem: Function
}

const initialValue = {
  menuItem: [
    { title: "Details", icon: null, isSelected: true },
    { title: "History", icon: "clock", isSelected: false },
    { title: "Links", icon: "link", isSelected: false },
    { title: "Attachments", icon: "paperclip", isSelected: false }
  ],
  selectItem: (index: number) => {}
} as IInitialVale

const sideBarReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SELECT":
      return { ...state, menuItem: action.payload }
    default:
      return state
  }
}

const TabContext = React.createContext<IInitialVale>(initialValue)

const TabProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(sideBarReducer, {
    menuItem: initialValue.menuItem
  })
  const selectItem = (item: any) => {
    dispatch({
      type: "SELECT",
      payload: item
    })
  }

  return (
    <TabContext.Provider value={{ menuItem: state.menuItem, selectItem }}>
      {props.children}
    </TabContext.Provider>
  )
}

export { TabContext, TabProvider }
