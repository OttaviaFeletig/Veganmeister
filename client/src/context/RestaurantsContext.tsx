import React, { useState, createContext } from 'react'
import { initRestaurants } from '../assets/data/dumbData'
import { RestaurantsContextI } from '.'


export const RestaurantsContext = createContext<RestaurantsContextI>({
    restaurants: [],
    getAllRestaurants: () => {
        throw new Error('getAllRestaurants() not implemented')
    }
})




const RestaurantsContextProvider = (props: { children: React.ReactNode; }) => {
    const [restaurants, setRestaurants] = useState(initRestaurants)


    const getAllRestaurants = () => {

    }



    return (
        <RestaurantsContext.Provider value={{ restaurants, getAllRestaurants }}>
            {props.children}
        </RestaurantsContext.Provider>
    )

}

export default RestaurantsContextProvider


