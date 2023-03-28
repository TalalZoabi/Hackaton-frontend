import React from "react";
import Post from "../components/Post/Post";
import "./Welcome.css";
import { Loader } from "../components/Loader/Loader";
import { useGlobalContext } from "../context/PostsContext";

const Welcome = () => {
    const { isLoading } = useGlobalContext();

    return (
        <div className="welcome-page">
            {isLoading && <Loader />}
            {!isLoading && <Post />}
        </div>
    );
};

export default Welcome;
