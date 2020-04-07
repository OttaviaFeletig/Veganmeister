import React, { useState, createContext } from 'react'
import { initPosts } from '../assets/data/dumbData'
import { PostsContextI } from '.'
import { PostN } from '../@types'
import { sectionsReOrder, sectionsTextEdit } from './PostsFunctions'


export const PostsContext = createContext<PostsContextI>({
    posts: [],
    getAllPosts: () => {
        throw new Error('getALlPosts() not implemented')
    },
    handleSort: (sort: string) => {
        throw new Error('handleSort() not implemented')
    },
    changeSectionOrder: (post: PostN.PostI, section: PostN.PostSectionI, action: string) => {
        throw new Error('changeSectionOrder() not implemented')
    },
    changeSplit: (section: PostN.PostSectionI) => {
        throw new Error('changeSplit() not implemented')
    },
    textChange: (post: PostN.PostI, postSection: PostN.PostSectionI, value: string, header: boolean) => {
        throw new Error('changeSplit() not implemented')
    },
    sort: 'alphaDown',
    editMode: false,
    toggleEditMode: (editMode: boolean) => {
        throw new Error('toggleEditMode() not implemented')
    },
})




const PostsContextProvider = (props: { children: React.ReactNode; }) => {
    const [posts, setPosts] = useState(initPosts)
    const [sort, setSort] = useState('alphaDown')
    const [editMode, toggleEditMode] = useState(false)


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
    const changeSectionOrder = (post: PostN.PostI, section: PostN.PostSectionI, action: string) => {
        const postSections = sectionsReOrder(post, section, action)
        console.log('postSections', postSections)
        setPosts([...posts])
    }
    const changeSplit = (postSection: PostN.PostSectionI) => {
        postSection.sideImg = !postSection.sideImg
        setPosts([...posts])
    }
    const textChange = (post: PostN.PostI, section: PostN.PostSectionI, value: string, header: boolean) => {
        const postSection = sectionsTextEdit(post, section, value, header)
        console.log('postSection', postSection)
        setPosts([...posts])
    }


    return (
        <PostsContext.Provider value={{
            posts,
            getAllPosts,
            sort,
            handleSort,
            changeSectionOrder,
            changeSplit,
            textChange,
            editMode,
            toggleEditMode
        }}>
            {props.children}
        </PostsContext.Provider>
    )

}

export default PostsContextProvider


