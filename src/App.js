import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostInfo from "./components/PostInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post-info/:postId" element={<PostInfo />} />
          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
