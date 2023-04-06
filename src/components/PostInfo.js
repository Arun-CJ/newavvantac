import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const PostInfo = () => {
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

  const EditPost = () => {
    return (
      <div>
        <input type="text" name="title" />
        <textarea rows={4} cols={5} name="body" />
      </div>
    );
  };

  return (
    <div key={postInfo.id} className="col-3">
      <h2>{postInfo.title} </h2>
      <p>{postInfo.body}</p>
      <p>Created By: {postInfo.userId}</p>
      <NavLink to={`/edit-post/${postInfo.id}`} className="btn btn-secondary">
        Edit
      </NavLink>
    </div>
  );
};

export default PostInfo;
