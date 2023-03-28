import React from "react";
import { useGlobalContext } from "../../context/PostsContext";
import Card from "../Card/Card";
import "./Post.css";

const Post = () => {
    const { postsData } = useGlobalContext();
    return (
        <div className="post">
            {postsData.map((el) => (
                <Card title={el.title} link={el.link} image={el.image} />
            ))}
        </div>
    );
};

export default Post;
