import React from "react";

const PostSummaryItem = ({
     post = {
         topic: "Web Development",
         userName: "ReactJS",
         time: "2h",
         title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
         image: "/images/react.png"
     }
}) => {
    return (
        <div className="list-group-item wd-list-item">
            <div className="row">
                <div className="col-9">
                    <div className="wd-color-grey">
                        {post.topic}
                    </div>
                    <div>
                        <span className="wd-bold wd-white">
                            {post.userName} <i className="fas fa-check-circle"/> <></>
                        </span>
                        <span className="wd-color-grey">
                            - {post.time}
                        </span>
                    </div>
                    <div className="wd-bold wd-white">
                        {post.title}
                    </div>

                </div>
                <div className="col-3 wd-flex wd-h-right wd-tweet-list-image-div">
                    <img src={post.image} alt={post.userName} className="wd-tweet-list-img"/>
                </div>
            </div>
        </div>
    );
}
export default PostSummaryItem;