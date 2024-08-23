import React from "react";
import { DeveloperImage } from "../../../assets/images/images";
import "./PostCard.css";

function PostCard({ mainImg, thumbnail, title, aid, id }) {
  return (
    <div className="post__card">
      <div className="post__image">
        <div className="main__image">
          <img src={mainImg} alt="" />
        </div>

        <div className="thumbnail">
          <img src={thumbnail} alt="" />
        </div>
      </div>

      <div className="post__desc">
        <div className="title">{title}</div>
        <p> albumId : {aid}</p>
        <p> id : {id}</p>
      </div>
    </div>
  );
}

export default PostCard;
