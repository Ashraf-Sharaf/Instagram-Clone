import './profile.css';
import { useState } from "react";


function Profile() {
  const data = 
    {
      fullname: "ashraf sharaf",
      email : "ashraf@gmail.com",
      username: "ashraf",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s',
      bio:"iam a software dev who loves gaming"
    };
  const [profile, setProfile] = useState(data);


const {fullname,image,email,username,bio}=data;

    return <div className="profiles container flex gap column align-center">
      <img src={image} className="imageUser" />
      <div>{fullname}</div>
      <div>{email}</div>
      <div>{username}</div>
      <div>{bio}</div>
      
    </div>
  }
  
  export default Profile;
  