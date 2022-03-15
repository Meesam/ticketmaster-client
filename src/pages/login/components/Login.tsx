import { useLazyQuery } from "@apollo/client"
import { History } from "history"
import React from "react"
import Loading from "../../../common/components/Loading"
import { AuthContext } from "../../../context/AuthContext"
import { USER_LOGIN } from "../../../grapql/"
import Logo from "../../../layouts/admin/images/tiaa-icon.jpg"
import useLocalStorage from "../../../util/useLocalStorage"

interface LoginProps {
  history: History
}

const Login: React.FC<LoginProps> = ({ history }) => {
  const [userName, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [errorMsg, setErrorMsg] = React.useState("")
  const [loginUser, { loading, data }] = useLazyQuery(USER_LOGIN)
  const [isStore, setStore] = useLocalStorage("apptoken", "")
  const context = React.useContext(AuthContext)

  const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value)

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)

  const onClickHandler = () => {
    if (!userName || userName === "" || userName.trim() === "") {
      setErrorMsg("Email can not be empty!")
      return false
    }
    if (!password || password === "" || password.trim() === "") {
      setErrorMsg("Password can not be empty!")
      return false
    }
    loginUser({
      variables: { email: userName, password: password }
    })
  }

  React.useEffect(() => {
    if (context.user?.isLoggedIn) {
      history.push("/admindashboard")
    }
  })

  React.useEffect(() => {
    if (data && !data.loginUser.error) {
      let storageObject = {
        token: data.loginUser.token,
        tokenExpireTime: data.loginUser.tokenExpireTime,
        firstName: data.loginUser.firstName,
        lastName: data.loginUser.lastName,
        email: data.loginUser.email,
        role: data.loginUser.role,
        id: data.loginUser.id,
        customerId: data.loginUser.customerId
      }
      setStore(JSON.stringify(storageObject))
      context.login({ ...storageObject, isLoggedIn: true })
      history.push("/admindashboard")
    }
    if (data && data.loginUser.error) {
      setErrorMsg("Invalid username or password!")
    }
  }, [context, data, history, setStore])

  if (loading) return <Loading />

  return (
    <div
      className="bg-white h-auto w-2/6 flex flex-col mb-4 shadow-lg rounded-sm"
      data-testid="loginform"
    >
      <div className="flex mt-8 ml-8">
        <img src={Logo} className="bg-cover h-8 w-8 mr-3" />
        <div className="font-bold text-lg mt-1 text-black">Ticket Master</div>
      </div>
      <span className="text-black text-2xl font-semibold mt-4 ml-8">
        Sign In
      </span>
      <div className="mt-4 ml-8 mr-10">
        <p data-testid="erromsg" className=" text-red-600 text-xs">
          {errorMsg}
        </p>
        <input
          className=" outline-none w-full p-1 text-xs overflow-hidden lg:text-sm xl:text-base text-gray-700 border-b border-gray-400"
          type="text"
          placeholder="Email, phone, or Skype"
          value={userName}
          onChange={onUserNameChange}
          data-testid="userName"
        />
        <input
          className=" outline-none w-full p-1 text-xs lg:text-sm xl:text-base text-gray-700 mt-4 border-b border-gray-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          data-testid="password"
        />
      </div>
      <div className="lg:flex mb-10">
        <span className="text-xs text-blue-500 mt-4 ml-8 cursor-pointer">
          Can’t access your account?
        </span>
        <div className="lg:ml-auto lg:mt-7">
          <button
            type="button"
            value="Next"
            name="Next"
            onClick={onClickHandler}
            className="flex w-64 ml-8 lg:w-0 justify-center items-center cursor-pointer py-1 px-5 lg:mr-10 md:px-8 lg:px-10 xl:px-10 2xl:px-12 bg-blue-900 text-white"
            data-testid="Next"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
