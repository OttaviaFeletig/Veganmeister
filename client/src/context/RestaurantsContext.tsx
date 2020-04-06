import React, { useState, createContext } from 'react'
import { initRestaurants } from '../assets/data/dumbData'
import { RestaurantsContextI } from '.'
import { RestaurantN } from '../@types'


export const RestaurantsContext = createContext<RestaurantsContextI>({
    restaurants: [],
    newRestaurant: null,
    getAllRestaurants: () => {
        throw new Error('getAllRestaurants() not implemented')
    },
    handleSetNewRestaurant: (city: string, name: string) => {
        throw new Error('handleSetNewRestaurant() not implemented')
    }
})




const RestaurantsContextProvider = (props: { children: React.ReactNode; }) => {
    const [restaurants, setRestaurants] = useState(initRestaurants)
    const [newRestaurant, setNewRestaurant] = useState<RestaurantN.RestaurantI>()

    const getAllRestaurants = async () => {


    }

    const handleSetNewRestaurant = (city: string, name: string) => {
        const location: RestaurantN.LocationI = {
            geometry: {
                type: "Point",
                coordinates: [-121.2, 37.421]
            },
            district: 'Kreuzberg',
            city,
            country: 'Germany'
        }
        setNewRestaurant({
            _id: '1',
            name,
            location,
            description: 'lorem ipsum dolor sit amet, consectetur adip',
            images: [],
            mainPicture: "https://source.unsplash.com/user/loukass23",
            likes: 2,
            likedBy: [],
            rating: 1.5,
        })
    }
    // const restaurantsSearch = async (city: string, search: string) => {
    //     const { REACT_APP_client_secret, REACT_APP_client_id } = process.env;

    //     var requestOptions = {
    //         method: 'GET',
    //     };

    //     try {
    //         const response = await fetch(`https://api.foursquare.com/v2/venues/search?client_id=${REACT_APP_client_id}&client_secret=${REACT_APP_client_secret}&v=20200406&near=${city}&intent=browse&radius=10000&query=${search}&limit=10`, requestOptions)
    //         const result = await response.json()
    //         console.log('result :', result);
    //     } catch (error) {
    //         console.log('error :', error);
    //     }


    // }



    return (
        <RestaurantsContext.Provider value={{ restaurants, getAllRestaurants, handleSetNewRestaurant, newRestaurant }}>
            {props.children}
        </RestaurantsContext.Provider>
    )

}

export default RestaurantsContextProvider


