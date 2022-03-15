import Zoom from "@material-ui/core/Zoom"
import { SnackbarProvider } from "notistack"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

const anchorOrigin = {
  vertical: "top",
  horizontal: "center"
} as any

const zoom = Zoom as any

ReactDOM.render(
  <SnackbarProvider anchorOrigin={anchorOrigin} TransitionComponent={zoom}>
    <App />
  </SnackbarProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
