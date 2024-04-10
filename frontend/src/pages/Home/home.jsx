import "./home.css";
import { useState } from "react";
import Post from "./posts/post";
import Profile from "./profiles/profile";
import Recommendation from "./recommendations/Recommendation";

function Home() {





  return <div className="flex parent gap">
    <Profile/>
    <Post/>
    <Recommendation/>
    </div>
}
export default Home;
