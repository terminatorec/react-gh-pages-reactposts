import React from 'react'
import Post from './Post'
// import {CSSTransition, TransitionGroup} from "react-transition-group"
import {
    CSSTransition,
    TransitionGroup
  } from 'react-transition-group';

function PostList({posts, title, remove}) {
    if(!posts.length){
        return(
            <h1>
                Посты не найдены!
            </h1>
        )
    }
  return (
    <div className='PostComponent'>
        <h1>
            {title}
        </h1>
        <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="item"

                    >
                        <Post remove={remove} number={index+1} post={post}/>
                    </CSSTransition>
                )}
        </TransitionGroup>
    </div>
  )
}

export default PostList