import "./profile.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import EditProfile from "./editProfile";

function Profile() {
  const navigate=useNavigate();
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/getuser", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      if (result.status == 200) setProfile(result.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = ()=>{
    window.localStorage.setItem("token",null);
    navigate('/');
    
  }

  useEffect(() => {
    getProfile();
  }, []);

  const { name, username, bio } = profile;

  return (
    <div className="profiles container flex gap column align-center">
      <button className='logout-button' onClick={()=>logout()}>Logout</button>
      {/* <img src={image} className="imageUser" /> */}
     
      {/* <div>{name}</div>
      <div>{username}</div>
      <div>{bio}</div> */}
      <div className=" column flex  full_w gap">
      <div className="flex profile-info ">
        <div>Name:</div>
        <div>{name}</div>
        </div>
        <div className="flex profile-info">
        <div>Username:</div>
        <div>{username}</div>
        </div>
        <div className="flex profile-info">
        <div>Bio:</div>
        <div>{bio}</div>
        </div>
      </div>



      <EditProfile/>
    </div>
  );
}

export default Profile;
