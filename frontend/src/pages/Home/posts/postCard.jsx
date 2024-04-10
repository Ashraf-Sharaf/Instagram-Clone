import './post.css';
import { MdFavorite } from 'react-icons/md';
function PostCard({post}) {
    const {username,image}=post;
    return <div className='flex column postcard gap'>
      
      <div className='flex gap align-center'>
      <img src={image} className="imageProfile" />
      <h2>{username}</h2></div>

      <img src={image} className="imagePost" />
      <p>caption is here so as me</p>
      
     <div><MdFavorite   onClick={()=>{}} /></div>
      <div className='comments-section flex between'>
      <input className='comments' placeholder='Add a comment'></input>
      <button className='comment-button'>Post</button>
      </div>
      </div>
  }
  
  export default PostCard;
  