import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

import who from "../../../reducers/who";
import tweetsReducer from "../../../reducers/tweetsReducer";
import profileReducer from "../../../reducers/profileReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


const reducer = combineReducers({who, tweets: tweetsReducer, profile: profileReducer});
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/a8/twitter/", "/a8/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path={["/a8/twitter/explore"]} exact={true} component={ExploreScreen}/>
                <Route path={["/a8/twitter/profile"]} exact={true}>
                    <ProfileScreen profilePage={true}/>
                </Route>
                <Route path={["/a8/twitter/editProfile"]} exact={true}>
                    <ProfileScreen profilePage={false}/>
                </Route>
            </div>
        </Provider>
    );
};
export default Build;
