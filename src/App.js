import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";

import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/a6/Build/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen";
import A6 from "./components/a6";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/", "/a6", "/a6/hello"]} exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path="/a6/practice" exact={true}>
                  <A6/>
                  <Practice/>
              </Route>
              <Route path="/a6/twitter/explore" exact={true}>
                  <ExploreScreen/>
              </Route>
              <Route path="/a6/twitter/home" exact={true}>
                  <HomeScreen/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
