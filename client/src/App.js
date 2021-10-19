import NavBar from "./components/NavBar";
import "./App.css";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import UserLogin from "./Pages/UserLogin";
import UserProfile from "./Pages/UserProfile";
import SearchWines from "./Pages/SearchWines";
import WineDetailsPage from "./Pages/WineDetailsPage";
import createWine from "./Pages/createWine";
import WineMap from "./Pages/WineMap";
import ErrorPage404 from "./Pages/ErrorPage404";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import "bulma/css/bulma.min.css";
import EditProfile from "./components/EditProfile";
import ErrorBoundary from "./components/ErrorBoundary";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

// import LoadingPageAnimation from './components/LoadingPageAnimation';

function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <header className="App-header">
            <ErrorBoundary>
              <NavBar />
            </ErrorBoundary>
          </header>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-10">
          <ErrorBoundary>
            <Router>
              <Switch>
                <AnonRoute exact path="/login" component={UserLogin} />
                <AnonRoute exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/user" component={UserProfile} />
                <Route exact path="/create-wine" component={createWine} />
                <Route exact path="/winemap" component={WineMap} />
                <Route exact path="/wine/:id" component={WineDetailsPage} />
                <Route exact path="/search" component={SearchWines} />
                <Route exact path="/about" component={AboutUs} />
                <PrivateRoute
                  exact
                  path="/user/:userId"
                  component={EditProfile}
                />
                <Route path="/404" component={ErrorPage404} />
                <Route exact path="/" component={HomePage} />
              </Switch>
            </Router>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
