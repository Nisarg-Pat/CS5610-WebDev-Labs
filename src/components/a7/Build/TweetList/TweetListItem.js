import React from "react";

const TitleDescriptionOfImage = ({posts}) => {
    return (
        <div className="wd-post-image-block">
            <div>
                <img src={posts.image} alt={posts.userHandle}
                     className="wd-post-img"/>
            </div>
            <div className="wd-post-img-desc">
                <div className="wd-white wd-bold">
                    {posts.imageTitle}
                </div>
                <div className="wd-color-grey">
                    {posts.imageDesc}
                </div>
            </div>
        </div>
    )
}

const NoTitleDescriptionOfImage = ({posts}) => {
    return (
        <div className="wd-post-image-block">
            <div>
                <img src={posts.image} alt={posts.userHandle}
                     className="wd-post-img wd-post-img-all"/>
            </div>

        </div>
    )
}

const TweetListItem = ({
                      posts = {
                          userImage: "/images/jquery.png",
                          userName: "Elon Musk",
                          userHandle: "@elonmusk",
                          time: "23h",
                          title: "Amazing show about @Inspiration4x mission!",
                          image: "/images/countdown.png",
                          imageTitle: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          imageDesc: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ",
                          comment: "4.2K",
                          retweet: "3.5K",
                          like: "37.5K"
                      }
                  }) => {
    return (
        <div className="list-group-item wd-list-item wd-border-bottom">
            <div className="row wd-white">
                <div className="col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img src={posts.userImage} className="wd-img-circle" alt={posts.userHandle}/>
                </div>
                <div
                    className="col-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 col-xxl-11 wd-post-content">
                    <div className="row">
                        <div className="col-11">
                            <span className="wd-bold wd-white">
                                {posts.userName} <i className="fas fa-check-circle"/> <></>
                            </span>

                            <span className="wd-color-grey">
                                {posts.userHandle} - {posts.time}
                            </span>
                        </div>
                        <div className="col-1">
                            <span className="wd-h-right wd-color-grey">
                                <i className="fas fa-ellipsis-h"/>
                            </span>
                        </div>
                    </div>
                    <div className="wd-post-title">
                        {posts.title}
                    </div>
                    {posts.imageTitle !== undefined ?
                        <TitleDescriptionOfImage posts={posts}/>
                        : <NoTitleDescriptionOfImage posts={posts}/>}
                    <div className="row wd-post-numbers wd-color-grey">
                        <div className="col-3">
                            <i className="far fa-comment"/>
                            <span className="wd-padding-left-12">
                                {posts.comment}
                            </span>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-retweet"/>
                            <span className="wd-padding-left-12">
                                {posts.retweet}
                            </span>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-heart"/>
                            <span className="wd-padding-left-12">
                                {posts.like}
                            </span>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-share"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TweetListItem;