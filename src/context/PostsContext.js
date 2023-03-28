import React, { createContext, useContext, useState } from "react";

const PostsContext = createContext({
    postsData: [],
    setPostsData: (a) => {},
});

const PostsProvider = ({ children }) => {
    const [postsData, setPostsData] = useState([]);

    return (
        <PostsContext.Provider
            value={{
                postsData,
                setPostsData,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(PostsContext);
};

export { PostsContext, PostsProvider };
