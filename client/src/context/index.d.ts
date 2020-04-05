import { Theme } from "@material-ui/core";

interface AuthContextI {
    isAuthenticated: Boolean,
    user: UserI,
    logIn(): void,

}
interface ThemeContextI {
    theme: Theme,
    setColors(): void;
}
interface PostsContextI {
    posts: PostsT;
    getAllPosts(): void;
    handleSort(sort: string): void;
    changeSectionOrder(post: PostN.PostI, section: PostN.PostSectionI, action: string): void;
    sort: string;
}
interface RestaurantsContextI {
    restaurants: RestaurantN.RestaurantsT;
    getAllRestaurants(): void;
}