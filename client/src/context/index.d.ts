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
    changeSplit(section: PostN.PostSectionI): void;
    handleSort(sort: string): void;
    textChange(post: PostN.PostI, postSection: PostN.PostSectionI, value: string, header: boolean): void;
    changeSectionOrder(post: PostN.PostI, section: PostN.PostSectionI, action: string): void;
    sort: string;
    editMode: boolean;
    toggleEditMode(editMode: boolean): void;
    newPost(restaurant: RestaurantN.RestaurantI, author: UserN.UserI, title: string): void
    newPostSection(post: PostN.PostI): void;
    delPostSection(post: PostN.PostI, section: PostN.PostSectionI): void

}
interface RestaurantsContextI {
    restaurants: RestaurantN.RestaurantsT;
    getAllRestaurants(): void;
    newRestaurant: RestaurantN.RestaurantI;
    handleSetNewRestaurant(newRestaurant: RestaurantN.RestaurantI): void;
    addRestaurant(): void;
    sort: string;
    handleSort(sort: string): void;

}