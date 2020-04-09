import React, { useState, createContext, useContext } from 'react'
import { initRestaurants } from '../assets/data/dumbData'
import { RestaurantsContextI } from '.'
import { RestaurantN } from '../@types'
import { AuthContext } from './AuthContext'


export const RestaurantsContext = createContext<RestaurantsContextI>({
    restaurants: [],
    newRestaurant: null,
    getAllRestaurants: () => {
        throw new Error('getAllRestaurants() not implemented')
    },
    handleSetNewRestaurant: (newRestaurant: RestaurantN.RestaurantI) => {
        throw new Error('handleSetNewRestaurant() not implemented')
    },
    addRestaurant: () => {
        throw new Error('addRestaurant() not implemented')
    },
    sort: 'alphaDown',
    handleSort: (sort: string) => {
        throw new Error('handleSort() not implemented')
    },

})



const RestaurantsContextProvider = (props: { children: React.ReactNode; }) => {
    const { user } = useContext(AuthContext)
    const initNewlocation: RestaurantN.LocationI = {
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        district: '',
        city: '',
        country: '',
        address: ''
    }
    const initNewRestaurant: RestaurantN.RestaurantI = {
        _id: 'auto',
        name: '',
        location: initNewlocation,
        description: '',
        images: [],
        mainPicture: '',
        likes: 0,
        likedBy: [],
        globalRating: 2.5,
        reviews: [],
        hashtags: [],
        addedBy: user,
        addedOn: new Date()

    }
    const [restaurants, setRestaurants] = useState<RestaurantN.RestaurantsT>(initRestaurants)
    const [sort, setSort] = useState('alphaDown')
    const [editMode, toggleEditMode] = useState(false)


    const [newRestaurant, setNewRestaurant] = useState<RestaurantN.RestaurantI>(initNewRestaurant)

    const handleSort = (sort: string) => {
        setSort(sort)
        switch (sort) {
            case 'alphaDown': setRestaurants(restaurants.sort((a: RestaurantN.RestaurantI, b: RestaurantN.RestaurantI) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0))
                break;
            case 'alphaUp': setRestaurants(restaurants.sort((a: RestaurantN.RestaurantI, b: RestaurantN.RestaurantI) => a.name !== b.name ? b.name < a.name ? -1 : 1 : 0))
                break;
            case 'starDown': setRestaurants(restaurants.sort((a: RestaurantN.RestaurantI, b: RestaurantN.RestaurantI) => a.globalRating !== b.globalRating ? b.globalRating < a.globalRating ? -1 : 1 : 0))
                break;
            case 'starUp': setRestaurants(restaurants.sort((a: RestaurantN.RestaurantI, b: RestaurantN.RestaurantI) => a.globalRating !== b.globalRating ? a.globalRating < b.globalRating ? -1 : 1 : 0))
                break;
            case 'dateDown': setRestaurants(restaurants.sort((a: RestaurantN.RestaurantI, b: RestaurantN.RestaurantI) => a.addedOn !== b.addedOn ? b.addedOn < a.addedOn ? -1 : 1 : 0))
                break;
            case 'dateUp': setRestaurants(restaurants.sort((a: RestaurantN.RestaurantI, b: RestaurantN.RestaurantI) => a.addedOn !== b.addedOn ? a.addedOn < b.addedOn ? -1 : 1 : 0))
                break;
        }
        console.log('restaurants', restaurants)
    }
    const getAllRestaurants = async () => {


    }

    const addRestaurant = () => {
        setRestaurants([...restaurants, { ...newRestaurant }])
        setNewRestaurant(initNewRestaurant)
    }
    const handleSetNewRestaurant = (newRestaurant: RestaurantN.RestaurantI) => {
        setNewRestaurant(newRestaurant)
    }

    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            getAllRestaurants,
            newRestaurant,
            handleSetNewRestaurant,
            addRestaurant,
            sort,
            handleSort
        }}>
            {props.children}
        </RestaurantsContext.Provider>
    )

}

export default RestaurantsContextProvider


