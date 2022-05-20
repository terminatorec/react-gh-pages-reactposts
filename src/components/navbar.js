import React, {useState, useRef, useMemo} from 'react';
import RewriteUseState from './rewriteUseState'
import Counter from './Counter'
import NewTest from './Newtest';
import Post from './Post';
import PostList from './PostList';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import PostForm from './PostForm';
import MySelect from './UI/select/MySelect';
import PostFilter from './PostFilter';
import MyModal from './UI/MyModal/MyModal';

function App(){

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query: ''})
    
    const[modal, setModal] = useState(false);

    const sortedPosts = useMemo(()=>{
        console.log('Что-то поменялось')
        if(filter.sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    },[sortedPosts, filter.query])
    
    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    return(
    <div>
        <MyButton onClick={()=>setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <PostFilter 
            filter={filter} 
            setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title=""/>
       
    </div>
    )

}

    


export default App;