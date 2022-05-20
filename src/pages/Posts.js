import React, { useState, useRef, useMemo, useEffect } from "react";
// import RewriteUseState from "./rewriteUseState";
// import Counter from "./Counter";
// import NewTest from "./Newtest";
// import Post from "./Post";
import PostList from ".././components/PostList";
// import MyInput from "./UI/input/MyInput";
import MyButton from ".././components/UI/button/MyButton";
// import MySelect from "./UI/select/MySelect";
import PostForm from ".././components/PostForm";
import PostFilter from ".././components/PostFilter";
import MyModal from ".././components/UI/MyModal/MyModal";
import { usePosts } from ".././hooks/usePost";
// import axios from "axios";
import PostService from ".././API/PostService";
import Loader from ".././components/UI/Loader/Loader";
import useFetching from ".././hooks/useFetching";
import getPageCount, { getPagesArray } from ".././utils/pages";
import Pagination from ".././components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  // const [totalCount, setTotalCount] = useState(0)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // const[fetchPosts, isPostsLoading, postError] = useFetching()

  console.log(totalPages);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошбика {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="" />
      )}
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages} 
      />
    </div>
  );
}

export default Posts;
