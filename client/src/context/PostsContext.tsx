import React, { useState, createContext } from 'react'
import { PostsI, RestaurantI, LocationI } from '../@types'



export const PostsContext = createContext<PostsContextI>({
    posts: [],
    getALlPosts: () => {
        throw new Error('getALlPosts() not implemented')
    }
})

const dumbLocation: LocationI = {
    coordinates: {
        type: "Point",
        coordinates: [-121.2, 37.421]
    },
    district: 'Kreuzberg',
    city: 'Berlin',
    country: 'Germany'
}
const dumbRestaurant: RestaurantI = {
    name: 'Dumb Restaurant',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    images: [],
    location: dumbLocation
}
const initPosts: PostsI = [
    {
        _id: '1',
        date: new Date(),
        restaurant: dumbRestaurant,
        mainPicture: 'https://source.unsplash.com/user/loukass23',
        images: [],
        author: 'UserN.UserI',
        likes: 0,
        title: 'Vegan Burger',
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus animi, ipsum tempora, necessitatibus provident iusto quas quos deleniti esse inventore assumenda id. Commodi, neque similique. Optio impedit ullam dolore laborum.',
        hashtags: ['veggie', 'burger'],
        comments: [],
        published: true,
        archived: false
    },
    {
        _id: '2',
        date: new Date(),
        restaurant: 'RestaurantI',
        mainPicture: 'https://source.unsplash.com/user/loukass23',
        images: [],
        author: 'UserN.UserI',
        likes: 0,
        title: 'Vegan Burger',
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus animi, ipsum tempora, necessitatibus provident iusto quas quos deleniti esse inventore assumenda id. Commodi, neque similique. Optio impedit ullam dolore laborum.',
        hashtags: ['veggie', 'burger'],
        comments: [],
        published: true,
        archived: false
    }
]


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


