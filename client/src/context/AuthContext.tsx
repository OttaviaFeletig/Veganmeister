import React, { useState, createContext } from 'react'
import { initUser } from '../assets/data/dumbData'
import { AuthContextI } from '.'

export const AuthContext = createContext<AuthContextI>({
    isAuthenticated: true,
    user: initUser,
    logIn: () => {
        throw new Error('logIn() not implemented')
    }
})


const AuthContextProvider = (props: { children: React.ReactNode; }) => {
    const [user, setUser] = useState(initUser)
    const [isAuthenticated, setIsAuthenticated] = useState(false)


    const logIn = () => {

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, logIn }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider


