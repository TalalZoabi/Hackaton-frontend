import React, { useState } from "react";
import { useGlobalContext } from "../../context/PostsContext";
import API from "../../services/Api";
import "./SearchForm.scss";

const SearchForm = () => {
  const { setPostsData } = useGlobalContext();

  const [input, setInput] = useState("");
  const [buttonText, setButtonText] = useState("Find Posts");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleGetPosts = async () => {
    const searchInput = input;
    try {
      setButtonText('Loading...')
      const res = await API.get('/search',{search: searchInput})
      setPostsData(res.data.data)
      setButtonText('Find Posts')
    } catch (error) {
      //TODO set globalContext error message
      setButtonText('Find Posts')
    }
  }

  return (
    <div className="form-container">
      <div className="form-group">
        <span>Posts: /r/</span>
        <input
          className="form-field"
          type="text"
          placeholder="Subreddit"
          value={input}
          onChange={handleInput}
        />
      </div>
      <button disabled={buttonText !== "Find Posts"} onClick={handleGetPosts} className={'search-btn'}>{buttonText}</button>
    </div>
  );
};

export default SearchForm;
