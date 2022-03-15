import { MockedProvider } from "@apollo/client/testing"
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { createMemoryHistory } from "history"
import React from "react"
import { USER_LOGIN } from "../../../grapql"
import Organization from "../../organization"
import Login from "./Login"

const mocks = [
  {
    request: {
      query: USER_LOGIN,
      variables: { email: "meesam.engineer4@gmail.com", password: "nrDbjD6D" }
    },
    result: {
      data: {
        loginUser: {
          _id: null,
          firstName: "Meesam",
          lastName: "Zaidi",
          email: ["meesam.engineer4@gmail.com"],
          role: "Super Admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJlZjUxNmQ3NjJjNjI2NTg1MTFkMjQiLCJlbWFpbCI6Im1lZXNhbS5lbmdpbmVlcjRAZ21haWwuY29tIiwiaWF0IjoxNjMxOTM5OTM4LCJleHAiOjE2MzE5NDM1Mzh9.A1cfkY8SUuazoI2p34ETxJq4xonfT4NsHrLmIqbNMBo",
          tokenExpireTime: 1,
          error: null
        }
      }
    }
  }
]

describe("Test Login Component", () => {
  const history = createMemoryHistory()
  const inputSetup = (lable: string) => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Login history={history} />
      </MockedProvider>
    )
    const Elem = screen.getByTestId(lable)
    return {
      Elem
    }
  }
  test("it render normally without error", () => {
    const { Elem } = inputSetup("loginform")
    expect(Elem).toBeInTheDocument()
  })

  test("it should have input type text for userName", () => {
    const { Elem } = inputSetup("userName")
    expect(Elem).toBeInTheDocument()
    expect(Elem).toHaveAttribute("type", "text")
  })

  test("it should have input type password for User Password", () => {
    const { Elem } = inputSetup("password")
    expect(Elem).toBeInTheDocument()
    expect(Elem).toHaveAttribute("type", "password")
  })

  test("it should have value typed for userName", () => {
    const { Elem } = inputSetup("userName")
    fireEvent.change(Elem, { target: { value: "Hello" } })
    expect(Elem.value).toBe("Hello")
  })

  test("it should have value typed for password", () => {
    const { Elem } = inputSetup("password")
    fireEvent.change(Elem, { target: { value: "123" } })
    expect(Elem.value).toBe("123")
  })

  test("it should have a button with text Next", () => {
    const { Elem } = inputSetup("Next")
    expect(Elem).toBeInTheDocument()
    expect(Elem).toHaveAttribute("type", "button")
  })

  test("it should render a error msg if username is empty on click Next", () => {
    const { Elem } = inputSetup("Next")
    const userName = screen.getByTestId("userName")
    fireEvent.change(userName, { target: { value: "Hello" } })
    expect(userName.value).toBe("Hello")
    fireEvent.click(Elem)
    const errorMsg = screen.getByTestId("erromsg")
    expect(errorMsg).toBeInTheDocument()
    expect(errorMsg).toHaveTextContent("Password can not be empty!")
  })

  test("it should render a error msg if password is empty on click Next", () => {
    const { Elem } = inputSetup("Next")
    const password = screen.getByTestId("password")
    fireEvent.change(password, { target: { value: "Hello" } })
    expect(password.value).toBe("Hello")
    fireEvent.click(Elem)
    const errorMsg = screen.getByTestId("erromsg")
    expect(errorMsg).toBeInTheDocument()
    expect(errorMsg).toHaveTextContent("Email can not be empty!")
  })

  test("it should render a component if userName and password is correct on click Next", async () => {
    const { Elem } = inputSetup("Next")
    fireEvent.click(Elem)

    await waitFor(async () => {
      render(<Organization />)
      const org = screen.getByTestId("organization")
      expect(org).toBeInTheDocument()
    })
  })
})
