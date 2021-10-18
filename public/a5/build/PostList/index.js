import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        <div class="list-group wd-list-item">
            ${posts.map(thisPost => {
        return PostItem(thisPost)
    }).join("")}
        </div>
    `)
}
export default PostList;