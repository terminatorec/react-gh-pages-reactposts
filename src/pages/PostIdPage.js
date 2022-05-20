import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import useFetching from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    
    const[fetchingById, isLoading, error] = useFetching(
        async()=>{
            const response = await PostService.getById(params.id)
            setPost(response.data)
        }
    )
    useEffect(()=>{
        fetchingById(params.id)
    },[])
    
    const [post, setPost] =  useState({});
    
    
  return (
      <div>
          <h1>
              Вы открыли страницу поста с ID = {params.id}
          </h1>
          {isLoading ? <Loader /> : 
              <div>
                  <h1>
                    {post.id}. {post.title}
                  </h1>
              </div>
          }
      </div>

  )
}

export default PostIdPage