import React, {useState} from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

function PostForm({create}) {

    const[post, setPost] = useState({
        title:'',
        body:''
    })


    
    function addNewPost(e){
        e.preventDefault()

        function timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        if(post.title == 0){
            console.log("Заголовок пустой!")     

            

            async function sleep() {
                document.querySelector('#PostTitleId').style.background ='rgba(255, 66, 66, 0.432)'
                await timeout(1000);
                document.querySelector('#PostTitleId').style.background ='rgba(40, 44, 52, 0)'
            }

            sleep();


        }
        else if(post.body == 0){
            console.log("Описание пустое!")

            async function sleep() {
                document.querySelector('#PostBodyId').style.background ='rgba(255, 66, 66, 0.432)'
                await timeout(1000);
                document.querySelector('#PostBodyId').style.background ='rgba(40, 44, 52,0)'
            }

            sleep();
        }
        else{
            const newPost = {
                ...post, id: Date.now()
            }
    
            create(newPost)
    
            setPost({
                title:'',
                body:''
            })
            
        }
        
    }

  return (
    <form className='PostForm'>
        <MyInput 
            id="PostTitleId"
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})}
            type="text"  
            placeholder='Название поста'
        />

        <MyInput 
            id="PostBodyId"
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            type="text"  
            placeholder='Описание поста'/>  
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm