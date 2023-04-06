import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostInfo from "./components/PostInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPosts from "./components/EditPosts";
import AddPosts from "./components/AddPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPosts />} />
          <Route path="/post-info/:postId" element={<PostInfo />} />
          <Route path="/edit-post/:postId" element={<EditPosts />} />
          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
