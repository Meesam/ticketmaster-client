import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import React from "react"
import Index from "./index"

describe("Test Login functionality", () => {
  test("Login render normally without break", () => {
    const component = render(<Index />)
    const mainComponent = component.getByTestId("login-index")
    expect(mainComponent).toBeTruthy()
  })

  test("It have Copyright text inside it", () => {
    render(<Index />)
    expect(screen.getByText("Copyright 2021")).toBeInstanceOf(Node)
  })
})
