import { useState } from "react";
import PostCard from "./postCard";

function Post() {
  const data = [
    {
      username: "ashraf",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s'
    },

    {
      username: "rabih",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s"
    },
    {
      username: "rabih",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s"
    },
  ];
  const [posts, setPosts] = useState(data);

  return (
    <div className="posts container ">
      <div className="add-Post-container flex row center ">
        <input type="file"></input>
        <input className="caption-input"></input>
        <button className="caption-button">Post</button>
      </div>
      {posts.map((post) => {
        return <PostCard post={post}  />;
      })}
    </div>
  );
}

export default Post;
