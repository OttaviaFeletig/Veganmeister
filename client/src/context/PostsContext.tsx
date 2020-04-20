import React, { useState, createContext } from 'react'
import { initPosts } from '../assets/data/dumbData'
import { PostsContextI } from '.'
import { PostN, RestaurantN, UserN } from '../@types'
import { sectionsReOrder, sectionsTextEdit, deletePostSection } from './PostsFunctions'


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
    newPost: (restaurant: RestaurantN.RestaurantI, author: UserN.UserI, title: string) => {
        throw new Error('newPost() not implemented')
    },
    newPostSection: (post: PostN.PostI) => {
        throw new Error('newPostSection() not implemented')
    },
    delPostSection: (post: PostN.PostI, section: PostN.PostSectionI) => {
        throw new Error('newPostSection() not implemented')
    },
})




const PostsContextProvider = (props: { children: React.ReactNode; }) => {
    console.log('props', props)
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
                break;
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
    const delPostSection = (post: PostN.PostI, section: PostN.PostSectionI) => {
        deletePostSection(post, section)
    }

    const newPostSection = (post: PostN.PostI) => {
        const initPostSection: PostN.PostSectionI =
        {
            img: '',
            index: post.postSections.length + 1,
            sideImg: true,
            header: '',
            body: '',
        }
        post.postSections.push(initPostSection)
        console.log('post', post)

        setPosts([...posts])
    }
    const newPost = (restaurant: RestaurantN.RestaurantI, author: UserN.UserI, title: string) => {

        const post: PostN.PostI = {
            //TODO: id generation?
            _id: '3',
            date: new Date(),
            restaurant,
            mainPicture: '',
            author,
            likes: 21,
            likedBy: [],
            title,
            postSections: [],
            hashtags: [],
            comments: [],
            published: false,
            archived: false,
            rating: 0,
        }
        newPostSection(post)
        setPosts([...posts, post])
        console.log('post', post)
        toggleEditMode(true)
        console.log('posts', posts)
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
            toggleEditMode,
            newPost,
            newPostSection,
            delPostSection
        }}>
            {props.children}
        </PostsContext.Provider>
    )

}

export default PostsContextProvider


