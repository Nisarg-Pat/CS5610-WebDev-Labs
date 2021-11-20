import {BrowserRouter, Route} from "react-router-dom";
import HelloWorldA6 from "./components/a6/HelloWorld";
import PracticeA6 from "./components/a6/Practice";
import ExploreScreenA6 from "./components/a6/Build/ExploreScreen";
import HomeScreenA6 from "./components/a6/Build/HomeScreen";
import PracticeA7 from "./components/a7/Practice";
import A6 from "./components/a6";
import A7 from "./components/a7";
import BuildA7 from "./components/a7/Build";

import PracticeA8 from "./components/a8/Practice";
import BuildA8 from "./components/a8/Build";
import A8 from "./components/a8";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/", "/a6", "/a6/hello", "/a7/hello"]} exact={true}>
                  <A8/>
                  <A7/>
                  <HelloWorldA6/>
              </Route>
              <Route path="/a6/practice" exact={true}>
                  <A6/>
                  <PracticeA6/>
              </Route>
              <Route path="/a6/twitter/explore" exact={true}>
                  <ExploreScreenA6/>
              </Route>
              <Route path="/a6/twitter/home" exact={true}>
                  <HomeScreenA6/>
              </Route>
              <Route path={["/a7", "/a7/practice"]} exact={true}>
                  <A8/>
                  <A7/>
                  <PracticeA7/>
              </Route>
              <Route path="/a7/twitter">
                  <BuildA7/>
              </Route>
              <Route path={["/a8", "/a8/practice"]} exact={true}>
                  <A8/>
                  <PracticeA8/>
              </Route>
              <Route path="/a8/twitter">
                  <BuildA8/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
