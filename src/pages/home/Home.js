import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/button/post/PostCard";
import "./Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log("there was an error here", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h3>Home page</h3>

      <div className="posts">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <PostCard
                mainImg={post.url}
                thumbnail={post.thumbnailUrl}
                title={post.title}
                id={post.id}
                aid={post.albumId}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
