import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    if (e.target.value) {
      fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${e.target.value}`
      )
        .then((response) => response.json())
        .then((json) => setPosts(json));
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="...search by userId"
        name="searchText"
        onChange={(e) => handleSearch(e)}
      />
      <div className="row">
        {posts?.length > 0 ? (
          posts.map((post) => {
            return (
              <div key={post.id} className="col-3">
                <h2>{post.title} </h2>
                <p>{post.body}</p>
                <p>Created By: {post.userId}</p>
                <button
                  onClick={() => navigate(`/post-info/${post.id}`)}
                  className="btn btn-primary"
                >
                  View Post Info
                </button>
                <button className="btn btn-danger mt-3">
                  Delete Post Info
                </button>
              </div>
            );
          })
        ) : (
          <p>No records found</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
