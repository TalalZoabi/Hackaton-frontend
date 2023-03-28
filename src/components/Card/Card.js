import React from "react";
import "./Card.css";
const Card = ({ title, image, link }) => {
    const getTitle = () => {
        if (title.length > 50) {
            return title.slice(0, 49) + "...";
        } else {
            return title;
        }
    };

    const clickHandler = () => {
        window.open(link, "_blank");
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
            <div className="info">
                <h2 class="info">
                    {!title ? "Test title for card" : getTitle()}
                </h2>
                <button onClick={clickHandler}>Continue to Post</button>
            </div>
        </div>
    );
};

export default Card;
