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
    toggleEditMode(editMode: boolean): void
}
interface RestaurantsContextI {
    restaurants: RestaurantN.RestaurantsT;
    getAllRestaurants(): void;
    restaurantsSearch(city: string, search: string): void;
}