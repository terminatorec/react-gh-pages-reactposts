import React from 'react'
import MyButton from './UI/button/MyButton'
import {useNavigate} from 'react-router-dom'

function Post(props){
  const router = useNavigate()
  let id = "/posts/" + props.post.id
  console.log(router)
    return (
      <div className='post'>
          <div className='post__content'>
              <strong>{props.post.id}. {props.post.title}</strong>
              <div>
              {props.post.body}
              </div>
          </div>
          <div className='post__btns'>
              <MyButton onClick={()=> router(id)}>
                  Открыть
              </MyButton>
              <MyButton onClick={()=> props.remove(props.post)}>
                  Удалить
              </MyButton>
          </div>
      </div>
    )
}

export default Post