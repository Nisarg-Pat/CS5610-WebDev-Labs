const PostSummaryItem = (post) => {
    return (`
        <div class="list-group-item wd-list-item">
            <div class="row">
                <div class="col-9">
                    <div class="wd-color-grey">
                        ${post.topic}
                    </div>
                    <div>
                        <span class="wd-bold wd-white">
                            ${post.userName} <i class="fas fa-check-circle"></i>
                        </span>
                        <span class="wd-color-grey">
                            - ${post.time}
                        </span>
                    </div>
                    <div class="wd-bold wd-white">
                        ${post.title}
                    </div>
                    
                </div>
                <div class="col-3 wd-flex wd-h-right wd-tweet-list-image-div">
                    <img src=${post.image} class="wd-tweet-list-img">
                </div>
            </div>
        </div>
    `);
}
export default PostSummaryItem;