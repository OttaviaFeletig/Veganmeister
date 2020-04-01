import React, { useState, createContext } from 'react'
import { initPosts } from '../assets/data/dumbData'


export const PostsContext = createContext<PostsContextI>({
    posts: [],
    getALlPosts: () => {
        throw new Error('getALlPosts() not implemented')
    }
})




const PostsContextProvider = (props: { children: React.ReactNode; }) => {
    const [posts, setPosts] = useState(initPosts)


    const getALlPosts = () => {

    }



    return (
        <PostsContext.Provider value={{ posts, getALlPosts }}>
            {props.children}
        </PostsContext.Provider>
    )

}

export default PostsContextProvider


