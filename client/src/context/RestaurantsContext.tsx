import React, { useState, createContext } from 'react'
import { initRestaurants } from '../assets/data/dumbData'
import { RestaurantsContextI } from '.'


export const RestaurantsContext = createContext<RestaurantsContextI>({
    restaurants: [],
    getAllRestaurants: () => {
        throw new Error('getAllRestaurants() not implemented')
    },
    restaurantsSearch: (city: string, search: string) => {
        throw new Error('restaurantsSearch() not implemented')
    }
})




const RestaurantsContextProvider = (props: { children: React.ReactNode; }) => {
    const [restaurants, setRestaurants] = useState(initRestaurants)

    const getAllRestaurants = async () => {

    }
    const restaurantsSearch = async (city: string, search: string) => {
        const { REACT_APP_client_secret, REACT_APP_client_id } = process.env;

        var requestOptions = {
            method: 'GET',
        };

        try {
            const response = await fetch(`https://api.foursquare.com/v2/venues/search?client_id=${REACT_APP_client_id}&client_secret=${REACT_APP_client_secret}&v=20200406&near=${city}&intent=browse&radius=10000&query=${search}&limit=10`, requestOptions)
            const result = await response.json()
            console.log('result :', result);
        } catch (error) {
            console.log('error :', error);
        }


    }



    return (
        <RestaurantsContext.Provider value={{ restaurants, getAllRestaurants, restaurantsSearch }}>
            {props.children}
        </RestaurantsContext.Provider>
    )

}

export default RestaurantsContextProvider


