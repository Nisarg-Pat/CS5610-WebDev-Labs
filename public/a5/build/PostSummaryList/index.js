import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <div class="list-group wd-list-item">
            ${post.map(thisPost => {
        return PostSummaryItem(thisPost)
    }).join("")}
        </div>
    `)
}
export default PostSummaryList;