import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {fetchAllWho} from "../../services/whoService";

const WhoToFollowList = () => {
    let [who, setWho] = useState([]);
    useEffect(() =>
                  fetchAllWho().then(who => setWho(who)));
    return (
        <div className="list-group wd-style-right">
            <div className="list-group-item wd-bold wd-white wd-who-to-follow-title">
                Who to follow
            </div>
            {who.map((whoItem, key) => <WhoToFollowListItem who={whoItem} key={key}/>)}
        </div>
    );
}
export default WhoToFollowList;