import React, { useReducer } from "react"

class LocalStorageService {
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify({ value }))
  }
  public getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key)
    if (data !== null) {
      let result = JSON.parse(JSON.parse(data))
      return result
    }
    return null
  }
}

interface ILocalStorage {
  id: string
  token: string | null
  tokenExpireTime: number
  firstName: string
  lastName: string
  email: string
  role: string
  customerId: string
}

interface ILoggedInUser {
  isLoggedIn?: boolean
  token?: string
  tokenExpireTime?: number
  firstName: string
  lastName: string
  email: string
  role: string
  id: string
  customerId: string
}

interface IAuth {
  user?: ILoggedInUser | null
  login: Function
  logout: Function
}

const initialValue = {
  user: null,
  login: (userData: ILoggedInUser) => {},
  logout: () => {}
} as IAuth

if (localStorage.apptoken) {
  const service = new LocalStorageService()
  const storeData: ILocalStorage | null = service.getItem("apptoken")
  if (
    storeData?.token &&
    storeData?.token !== "" &&
    storeData?.tokenExpireTime !== 0
  ) {
    initialValue.user = {
      token: storeData?.token,
      tokenExpireTime: storeData?.tokenExpireTime,
      isLoggedIn: true,
      firstName: storeData?.firstName,
      lastName: storeData?.lastName,
      email: storeData?.email,
      role: storeData?.role,
      id: storeData?.id,
      customerId: storeData?.customerId
    }
  }
}

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    default:
      return state
  }
}

const AuthContext = React.createContext(initialValue)

const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, { user: initialValue.user })
  const login = (userData: any) => {
    dispatch({
      type: "LOGIN",
      payload: userData
    })
  }
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null
    })
  }

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
