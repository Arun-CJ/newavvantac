import { useEffect, useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const callAPi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setPosts(data);
    //   })
    //   .catch((err) => console.log(err));
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     console.log(response.data);
    //     setPosts(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    callAPi();
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
      <NavLink to="/add-post" className="pl-5 btn btn-primary">
        Add Post
      </NavLink>
      <div className="row">
        {posts?.length > 0 ? (
          //   posts.map((post) => {
          //     return (
          //       <div key={post.id} className="col-3">
          //         <h2>{post.title} </h2>
          //         <p>{post.body}</p>
          //         <p>Created By: {post.userId}</p>
          //         <button
          //           onClick={() => navigate(`/post-info/${post.id}`)}
          //           className="btn btn-primary"
          //         >
          //           View Post Info
          //         </button>
          //         <button className="btn btn-danger mt-3">
          //           Delete Post Info
          //         </button>
          //       </div>
          //     );
          //   })
          // )
          <table border="1" rules="all" className="table">
            <thead>
              <tr>
                {console.log(Object.keys(posts[0]))}
                {Object.keys(posts[0]).map((ele) => {
                  return <th>{ele}</th>;
                })}
                <th>Action</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => navigate(`/post-info/${post.id}`)}
                        className="btn btn-primary"
                      >
                        View Post Info
                      </button>
                    </td>
                    <td>
                      <img src={post.image} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No records found</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
