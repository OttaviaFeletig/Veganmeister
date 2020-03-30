interface AuthContextI {
    isAuthenticated: Boolean,
    user: User,
    logIn(): void,

}
interface ThemeContextI {
    theme: any,
    setColors: any
}
interface PostsContextI {
    posts: any,
    getALlPosts(): void,
}


interface User {
    uid: string | null,
    name: string | null,
    surname?: string,
    avatar: string | null,
    isAdmin: Boolean
}