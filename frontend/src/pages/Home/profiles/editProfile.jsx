import { useState } from "react";
function EditProfile(){

    const [bio,setBio]=useState("");

return <div className="flex column edit_container gap">
    <label>Name:</label>
    <input className="edit_inputs" onChange={(e)=>setBio(e.target.value)}></input>
    <label>Bio:</label>
    <input className="edit_inputs" onChange={(e)=>setBio(e.target.value)}></input>
   <div className="flex center"> <button
          className="edit_button"
          onClick={() => {
           
          }}>
          Edit 
        </button>
</div></div>


}
export default EditProfile;