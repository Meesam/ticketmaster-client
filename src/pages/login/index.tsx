import React from "react"
import { RouteComponentProps } from "react-router-dom"
import Login from "./components/Login"
import SignInOption from "./components/SignInOption"

const Index: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div
      className="flex flex-col bg-fixed bg-no-repeat bg-cover justify-center items-center bg-gray-100 h-screen relative"
      style={{
        backgroundImage:
          "url(https://www.finaxismgmt.com/uploads/pictures/4d2d0a48d428a40aef17f045253e88b0mff.png)",
        objectFit: "cover",
        width: "100%"
      }}
      data-testid="login-index"
    >
      <Login history={history} />
      <SignInOption />
      <div className=" absolute w-full bg-black opacity-60 bottom-0 h-auto">
        <span className=" text-white text-xs float-right mr-4 p-1">
          Copyright 2021
        </span>
      </div>
    </div>
  )
}

export default Index
