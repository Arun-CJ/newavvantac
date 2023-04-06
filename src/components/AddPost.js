import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function AddPosts() {
  const [postInfo, setPostInfo] = useState([]);

  const handleInputs = (e) => {
    console.log(e.target.name, e.target.value);
    setPostInfo({ ...postInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postInfo);
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify(postInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setPostInfo(json))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label>User Id</label>
        <input
          className="form-control"
          type="text"
          name="userId"
          value={postInfo.userId}
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={postInfo.title}
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div className="form-group">
        <label>Body</label>
        <textarea
          className="form-control"
          rows={4}
          cols={5}
          name="body"
          value={postInfo.body}
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <button className="btn btn-primary mt-5">Add Post</button>
    </form>
  );
}

export default AddPosts;
