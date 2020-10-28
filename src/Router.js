import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"
import GamePage  from "./views/pages/games/GamePage"
// import Viewlist from "./player/Viewconfig"
//  import Playerlist from "./views/pages/Player/Playerlist"
// Route-based code splitting


const Home = lazy(() =>
  import("./views/pages/Home")
)
const PlayerList = lazy(() =>
import("./views/pages/PlayerList"));

const Viewlist = lazy(() =>
import("./views/pages/Player/Viewlist"));

const ListView = lazy(() =>
import("./views/pages/Player/ListView"));

const Editlist = lazy(() =>
import("./views/pages/Player/Editlist"));

const Game = lazy(() => import("./views/game/list/ThumbView"));

const login = lazy(() =>
  import("./views/pages/authentication/login/Login")

)

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={Home}
          />
          <AppRoute path="/games" component={Game} />
          <AppRoute
            path="/game/:id"
            component={GamePage}
          />
          <AppRoute
            path="/pages/login"
            component={login}
            fullLayout
          />
          <AppRoute
            path="/player"
            component={PlayerList}
            // fullLayout
          />
             <AppRoute
            path="/profile-view"
            component={Viewlist}
            // fullLayout
          />
              <AppRoute
            path="/profile-edit"
            component={Editlist}
            // fullLayout
          />
             <AppRoute
            path="/list-view"
            component={ListView}
            // fullLayout
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
