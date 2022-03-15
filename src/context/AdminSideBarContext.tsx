import React from "react"

export interface IItem {
  title: string
  isSelected: boolean
}

interface IInitialVale {
  menuItem: IItem[]
  selectItem: Function
}

const initialValue = {
  menuItem: [
    { title: "Users", isSelected: true },
    { title: "Customers", isSelected: false },
    { title: "Projects", isSelected: false }
  ],
  selectItem: (item: any) => {}
} as IInitialVale

const sideBarReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SELECT":
      return { ...state, menuItem: action.payload }
    default:
      return state
  }
}

const AdminSideBarContext = React.createContext<IInitialVale>(initialValue)

const SideBarProvider = (props: any) => {
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
    <AdminSideBarContext.Provider
      value={{ menuItem: state.menuItem, selectItem }}
    >
      {props.children}
    </AdminSideBarContext.Provider>
  )
}

export { AdminSideBarContext, SideBarProvider }
