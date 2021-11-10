import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";

import who from "../../../reducers/who";
import tweetsReducer from "../../../reducers/tweetsReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({who, tweets: tweetsReducer});
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/a7/twitter/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path={["/a7/twitter/explore"]} exact={true} component={ExploreScreen}/>
            </div>
        </Provider>
    );
};
export default Build;
