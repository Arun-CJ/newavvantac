import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

function EditPosts() {
  const [postInfo, setPostInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPostInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputs = (e) => {
    console.log(e.target.name, e.target.value);
    setPostInfo({ ...postInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postInfo);
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: postInfo.id,
        title: postInfo.title,
        body: postInfo.body,
        userId: postInfo.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <button className="btn btn-primary mt-5">Update Post</button>
    </form>
  );
}

export default EditPosts;
