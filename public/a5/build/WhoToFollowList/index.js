import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <div class="list-group wd-who-to-follow">
                <div class="list-group-item wd-bold wd-white wd-who-to-follow-title">
                    Who to follow
                </div>
                ${who.map(whoItem => {
                    return(WhoToFollowListItem(whoItem));
                }).join("")}
            </div>
    `);
}
export default WhoToFollowList;