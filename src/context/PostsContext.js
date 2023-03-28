import React, { createContext, useContext, useState } from "react";

const PostsContext = createContext({
    postsData: [],
    setPostsData: (a) => {},
});

const PostsProvider = ({ children }) => {
    const [postsData, setPostsData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    return (
        <PostsContext.Provider
            value={{
                postsData,
                setPostsData,
                isLoading,
                setLoading,
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
