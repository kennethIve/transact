import { Route,Switch,BrowserRouter as Router } from "react-router-dom"
import { LoginPage, MainPage } from "../pages"
import { AuthRoute } from "../components"
import { NotFound404 } from "../errorPages"

export const App = () => 
   (
    <Router>
      <Switch>
        <AuthRoute exact path = "/" component = { MainPage } />
        <Route path = "/login" component = { LoginPage } />
        <Route path = "*" component = { NotFound404 } />
      </Switch>
    </Router>
    )


