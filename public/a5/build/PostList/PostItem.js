const PostItem = (posts) => {
    return (`
        <div class="list-group-item wd-list-item wd-post">
            <div class="row wd-white">
                <div class="col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img src=${posts.userImage} class="wd-img-circle"/>
                </div>
                <div class="col-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 col-xxl-11 wd-post-content">
                    <div class="row">
                        <div class="col-11">
                            <span class="wd-bold wd-white">
                                ${posts.userName} <i class="fas fa-check-circle"></i>
                            </span>
                            <span class="wd-color-grey">
                                ${posts.userHandle} - ${posts.time}
                            </span>
                        </div>
                        <div class="col-1">
                            <span class="wd-h-right wd-color-grey">
                                <i class="fas fa-ellipsis-h"></i>
                            </span>
                        </div> 
                    </div>
                    <div class="wd-post-title">
                        ${posts.title}
                    </div>
                    ${posts.imageTitle !== undefined ? `
                        <div class="wd-post-image-block">
                            <div>
                                <img src=${posts.image}
                                     class="wd-post-img">
                            </div> 
                            <div class="wd-post-img-desc">
                                <div class="wd-white wd-bold">
                                    ${posts.imageTitle}
                                </div>
                                <div class="wd-color-grey">
                                    ${posts.imageDesc}
                                </div>
                            </div>
                        </div>
                    ` : `
                        <div class="wd-post-image-block">
                            <div>
                                <img src=${posts.image}
                                     class="wd-post-img wd-post-img-all">
                            </div> 
                           
                        </div>
                    `}
                    <div class="row wd-post-numbers wd-color-grey">
                        <div class="col-3">
                            <i class="far fa-comment"></i>
                            <span class="wd-padding-left-12">
                                ${posts.comment}
                            </span>
                        </div>
                        <div class="col-3">
                            <i class="fas fa-retweet"></i>
                            <span class="wd-padding-left-12">
                                ${posts.retweet}
                            </span>
                        </div>
                        <div class="col-3">
                            <i class="fas fa-heart"></i>
                            <span class="wd-padding-left-12">
                                ${posts.like}
                            </span>
                        </div>
                        <div class="col-3">
                            <i class="fas fa-share"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;