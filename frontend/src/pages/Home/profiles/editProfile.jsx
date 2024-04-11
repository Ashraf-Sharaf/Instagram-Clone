import { useState } from "react";
import axios from "axios";

function EditProfile() {
  const [bio, setBio] = useState("");

  const editUserProfile = async () => {
    try {
      const data = {
        bio: bio,
      };

      const result = await axios.post("http://127.0.0.1:8000/api/updateUser", data, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      if (result.status == 200) {
        console.log("sssss");
      } else {
        alert("error");
      }
      setBio = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex column edit_container gap">
      <label>Bio:</label>
      <input
        className="edit_inputs"
        onChange={(e) => setBio(e.target.value)}
      ></input>
      <div className="flex center">
        {" "}
        <button className="edit_button" onClick={() => editUserProfile()}>
          Edit
        </button>
      </div>
    </div>
  );
}
export default EditProfile;
