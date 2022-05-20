import React, {useMemo} from 'react';

// свой собственный хук
export const useSortedPosts = (posts, sort) =>{
    const sortedPosts = useMemo(()=>{
        console.log('Что-то поменялось')
        if(sort){
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts,sort,query) =>{

    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    },[sortedPosts, query])

    return sortedAndSearchedPosts;
}