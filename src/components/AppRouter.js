import React from 'react'
import {BrowserRouter,Switch,Route,Routes,Router,Link} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error/>} />
    </Routes>
  )
}

export default AppRouter