import React, { useState, createContext } from 'react'
import { PostsT, RestaurantI, LocationI, UserN } from '../@types'



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
const initUser: UserN.UserI = {
    avatar: 'https://source.unsplash.com/user/loukass23',
    name: 'James',
    surname: 'Bond',
    email: 'james.bond@mi6.uk',
    password: 'topSecret',
    posts: [],
    username: 'james007',
    // rank: 'VeganVirgin'
}
const initPosts: PostsT = [
    {
        _id: '1',
        date: new Date(),
        restaurant: dumbRestaurant,
        mainPicture: 'https://source.unsplash.com/user/loukass23',
        images: [],
        author: initUser,
        likes: 21,
        title: 'Vegan Burger',
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus animi, ipsum tempora, necessitatibus provident iusto quas quos deleniti esse inventore assumenda id. Commodi, neque similique. Optio impedit ullam dolore laborum.',
        hashtags: ['veggie', 'burger'],
        comments: [],
        published: true,
        archived: false,
        rating: 4,
    },
    {
        _id: '2',
        date: new Date(),
        restaurant: dumbRestaurant,
        mainPicture: 'https://source.unsplash.com/user/loukass23',
        images: [],
        author: initUser,
        likes: 1,
        title: 'Vegan Whatever title not too long',
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus animi, ipsum tempora, necessitatibus provident iusto quas quos deleniti esse inventore assumenda id. Commodi, neque similique. Optio impedit ullam dolore laborum.',
        hashtags: ['veggie', 'burger'],
        comments: [],
        published: true,
        archived: false,
        rating: 1,
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


