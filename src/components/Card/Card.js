import React from "react";
import "./Card.css";
const Card = ({ title, image, link }) => {
    const clickHandler = () => {
        window.open("https://www.reddit.com" + link, "_blank");
    };
    return (
        <div class="card">
            <div class="img">
                {image ? (
                    <img src={image} alt="post" height="65" />
                ) : (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Reddit_icon.svg/1280px-Reddit_icon.svg.png"
                        alt="post"
                        height="65"
                    />
                )}
            </div>

            <h2 class="info">{!title ? "Test title for card" : title}</h2>

            <button onClick={clickHandler}>Continue to Post</button>
        </div>
    );
};

export default Card;
