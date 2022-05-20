import axios from 'axios';

export default class PostService{
    static async getAll(limit = 10, page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id){
        // post += id.valueOf
        // const response = await axios.get(post)
        // const response = await axios.get(post)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // let post = 'https://jsonplaceholder.typicode.com/posts/${id}'
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        return response
    }
}

