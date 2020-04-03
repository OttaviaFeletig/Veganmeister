import { RestaurantN, UserN, PostN } from "../../@types"
export const initUser: UserN.UserI = {
    avatar: 'https://source.unsplash.com/user/loukass23',
    name: 'James',
    surname: 'Bond',
    email: 'james.bond@mi6.uk',
    // password: 'topSecret',
    posts: [],
    username: 'james007',
    isAdmin: false
    // rank: 'VeganVirgin'
}
const dumbLocation: RestaurantN.LocationI = {
    geometry: {
        type: "Point",
        coordinates: [-121.2, 37.421]
    },
    district: 'Kreuzberg',
    city: 'Berlin',
    country: 'Germany'
}
const dumbRestaurant: RestaurantN.RestaurantI = {
    _id: '1',
    name: 'Dumb Restaurant',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    images: [],
    location: dumbLocation,
    mainPicture: "https://source.unsplash.com/user/loukass23",
    likes: 2,
    likedBy: [initUser],
    rating: 1.5,
}
const dumbRestaurant2: RestaurantN.RestaurantI = {
    _id: '1',
    name: 'Bird Food',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    images: [],
    location: dumbLocation,
    mainPicture: "https://source.unsplash.com/user/loukass23",
    likes: 35,
    likedBy: [initUser],
    rating: 5,
}

const initComments: PostN.CommentsT = [{
    _id: '1',
    user: initUser,
    date: new Date(2018, 11, 24, 10),
    body: 'nice post mate',
    likes: 1,
    likedBy: [initUser]
},
{
    _id: '2',
    user: initUser,
    date: new Date(2019, 11, 24, 10),
    body: 'woooooowwwwwwwwwwwwwww i love dumb restaurant',
    likes: 12,
    likedBy: []
}]

const initPostSections: PostN.PostSectionsT = [
    {
        img: 'https://source.unsplash.com/user/loukass23',
        index: 1,
        sideImg: true,
        header: 'my header',
        body: 'lorqsqsxqsem',
    },
    {
        img: 'https://source.unsplash.com/user/loukass23',
        index: 2,
        sideImg: false,
        header: 'my header',
        body: 'lorqsqsxqsem',
    },
    {
        img: '',
        index: 3,
        sideImg: true,
        header: 'my header',
        body: 'lorqsqsxqsem',
    }
]
export const initPosts: PostN.PostsT = [
    {
        _id: '1',
        date: new Date(),
        restaurant: dumbRestaurant,
        mainPicture: 'https://source.unsplash.com/user/loukass23',
        author: initUser,
        likes: 21,
        likedBy: [initUser],
        title: 'Vegan Burger',
        postSections: initPostSections,
        hashtags: ['veggie', 'burger'],
        comments: initComments,
        published: true,
        archived: false,
        rating: 4,
    },
    {
        _id: '2',
        date: new Date(2019, 11, 24, 10),
        restaurant: dumbRestaurant,
        mainPicture: 'https://source.unsplash.com/user/loukass23',
        author: initUser,
        likes: 1,
        likedBy: [initUser],
        title: 'Vegan Whatever title not too long',
        postSections: initPostSections,
        hashtags: ['veggie', 'burger'],
        comments: [],
        published: true,
        archived: false,
        rating: 1,
    }
]

export const initRestaurants: RestaurantN.RestaurantT = [
    dumbRestaurant, dumbRestaurant2
]