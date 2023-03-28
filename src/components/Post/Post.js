import React from "react";
import Card from "../Card/Card";
import "./Post.css";

const Post = ({ arrayOfPosts }) => {
    const arr = [
        {
            title: "Post 1",
            imageLink: "https://i.redd.it/u8b2pgrblij71.png",
            postLink:
                "https://www.reddit.com/r/RedditforBusiness/comments/113yfmq/marketing_learnings_from_super_bowl_lvii/",
        },
        {
            title: "Post 2",
            imageLink: null,
            postLink:
                "https://www.reddit.com/r/news/comments/123ksgt/largest_strike_in_decades_brings_germany_to_a/",
        },
        {
            title: "Post 3",
            imageLink: null,
            postLink:
                "https://www.reddit.com/r/comics/comments/123vwrk/wedding_mirrors_oc/",
        },
        {
            title: "Post 4",
            imageLink: null,
            postLink:
                "https://www.reddit.com/r/RedditforBusiness/comments/113yfmq/marketing_learnings_from_super_bowl_lvii/",
        },
    ];
    return (
        <div className="post">
            {(!arrayOfPosts ? arr : arrayOfPosts).map((el) => (
                <Card
                    title={el.title}
                    postLink={el.postLink}
                    imageLink={el.imageLink}
                />
            ))}
        </div>
    );
};

export default Post;
