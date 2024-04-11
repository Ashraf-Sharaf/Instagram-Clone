import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
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

  useEffect(() => {
    getProfile();
  }, []);

  const { name, username } = profile;

  return (
    <div className="profiles container flex gap column align-center">
      {/* <img src={image} className="imageUser" /> */}
      <div>{name}</div>
      <div>{username}</div>
      {/* <div>{bio}</div> */}
    </div>
  );
}

export default Profile;
