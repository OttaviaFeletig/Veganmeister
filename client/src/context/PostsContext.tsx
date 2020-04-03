import React, { useState, createContext } from 'react'
import { initPosts } from '../assets/data/dumbData'
import { PostsContextI } from '.'


export const PostsContext = createContext<PostsContextI>({
    posts: [],
    getAllPosts: () => {
        throw new Error('getALlPosts() not implemented')
    },
    handleSort: (sort: string) => {
        throw new Error('handleSort() not implemented')
    },
    sort: 'alphaDown'
})




const PostsContextProvider = (props: { children: React.ReactNode; }) => {
    const [posts, setPosts] = useState(initPosts)
    const [sort, setSort] = useState('alphaDown')


    const handleSort = (sort: string) => {
        setSort(sort)
        switch (sort) {
            case 'alphaDown': setPosts(posts.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0))
                break;
            case 'alphaUp': setPosts(posts.sort((a, b) => a.title !== b.title ? b.title < a.title ? -1 : 1 : 0))
                break;
            case 'starDown': setPosts(posts.sort((a, b) => a.rating !== b.rating ? b.rating < a.rating ? -1 : 1 : 0))
                break;
            case 'starUp': setPosts(posts.sort((a, b) => a.rating !== b.rating ? a.rating < b.rating ? -1 : 1 : 0))
                break;
            case 'dateDown': setPosts(posts.sort((a, b) => a.date !== b.date ? b.date < a.date ? -1 : 1 : 0))
                break;
            case 'dateUp': setPosts(posts.sort((a, b) => a.date !== b.date ? a.date < b.date ? -1 : 1 : 0))
        }
        console.log('posts', posts)
    }
    const getAllPosts = () => {

    }



    return (
        <PostsContext.Provider value={{ posts, getAllPosts, sort, handleSort }}>
            {props.children}
        </PostsContext.Provider>
    )

}

export default PostsContextProvider


