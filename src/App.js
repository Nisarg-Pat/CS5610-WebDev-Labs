// import logo from './logo.svg';
// import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";

import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/a6/Build/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/a6/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path={"/a6/twitter/home"} exact={true}>
                  <HomeScreen/>
              </Route>
              <Route path={"/a6/twitter/explore"} exact={true}>
                  <ExploreScreen/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
