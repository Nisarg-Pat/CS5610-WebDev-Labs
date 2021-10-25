import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <div className="list-group wd-who-to-follow">
            <div className="list-group-item wd-bold wd-white wd-who-to-follow-title">
                Who to follow
            </div>
            {who.map((whoItem, key) => <WhoToFollowListItem who={whoItem} key={key}/>)}
        </div>
    );
}
export default WhoToFollowList;