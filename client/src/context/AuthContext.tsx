import React, { useState, createContext } from 'react'

const initUser: User = {
    name: 'Lucas',
    surname: 'DPS',
    avatar: 'https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349630/MERN/20170409_193026.jpg',
    isAdmin: false,
    uid: ''
}

export const AuthContext = createContext<AuthContextI>({
    isAuthenticated: false,
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


