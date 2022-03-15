import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"
import { RouteComponentProps, RouteProps } from "react-router"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom"
import "./App.css"
import { AuthContext, AuthProvider } from "./context/AuthContext"
import { TicketProvider } from "./context/TicketContext"
import SuperAdminLayout from "./layouts/admin"
import ProjectLayout from "./layouts/ProjectLayout"
import Boards from "./pages/boards"
import Login from "./pages/login"
import Project from "./pages/project"
import SuperAdminDashboard from "./pages/superAdminDashboard"
import Ticket from "./pages/ticket"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

const RouteLayout: React.FC<RouteProps> = (props) => {
  const { component: Component, ...rest } = props
  const context = React.useContext(AuthContext)
  if (!Component) return null

  if (context.user?.isLoggedIn) {
    return (
      <Route
        {...rest}
        render={(matchProps: RouteComponentProps<{}>) => (
          <ProjectLayout>
            <Component {...matchProps} />
          </ProjectLayout>
        )}
      />
    )
  }
  return <Redirect to="/login" />
}

const AdminRouteLayout: React.FC<RouteProps> = (props) => {
  const { component: Component, ...rest } = props
  const context = React.useContext(AuthContext)
  if (!Component) return null

  if (context.user?.isLoggedIn) {
    return (
      <Route
        {...rest}
        render={(matchProps: RouteComponentProps<{}>) => (
          <SuperAdminLayout>
            <Component {...matchProps} />
          </SuperAdminLayout>
        )}
      />
    )
  }
  return <Redirect to="/login" />
}

const AppRouter = () => {
  const context = React.useContext(AuthContext)

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              {context.user?.isLoggedIn ? (
                <Redirect to="/organization" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>

            <Route path="/login" component={Login} />
            <AdminRouteLayout
              path="/organization"
              component={SuperAdminDashboard}
            />
            <AdminRouteLayout
              path="/admindashboard"
              component={SuperAdminDashboard}
            />
            <RouteLayout exact path="/project" component={Project} />
            <RouteLayout exact path="/boards" component={Boards} />
            <TicketProvider>
              <RouteLayout
                exact
                path="/project/:id/ticket"
                component={Ticket}
              />
            </TicketProvider>
          </Switch>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default AppRouter
