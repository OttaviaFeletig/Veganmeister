export namespace PostN {
    interface PostI {
        _id: string;
        date: Date;
        restaurant: RestaurantI;
        mainPicture: string;
        author: UserN.UserI;
        likes: number;
        likedBy: UserN.UsersT;
        title: string;
        postSections: PostSectionsT;
        hashtags: Array<string>;
        comments: CommentsT;
        published: boolean;
        archived: boolean;
        rating: number;
    }
    type PostSectionsT = Array<PostSectionI>

    interface PostSectionI {
        index: number,
        header: string,
        body: string,
        img: string,
        sideImg: boolean
    }

    interface CommentI {
        _id: string;
        user: UserN.UserI;
        date: Date;
        body: string;
        likes: number;
        likedBy: UserN.UsersT
    }

    type PostsT = Array<PostI>
    type CommentsT = Array<CommentI>
}

export namespace RestaurantN {
    interface RestaurantI {
        _id: string;
        name: string;
        location: LocationI;
        description: string;
        mainPicture: string;
        images: Array<string>;
        likes: number;
        likedBy: UserN.UsersT;
        rating: number;
    }

    interface LocationI {
        geometry: GeoJSON.Point;
        district: string;
        city: string;
        country: string;
    }

    type RestaurantT = Array<RestaurantI>
}
export namespace UserN {
    interface UserI {
        username: string;
        name: string;
        surname: string;
        email: string;
        // password: string;
        avatar: string;
        posts: Array<PostI>;
        rank?: RankI;
        isAdmin: Boolean;

    }
    type UsersT = Array<UserI>
    interface RankI {
        name: RankNames;
        points: RankPoints;
        logo: RankLogo;
    }

    enum RankNames {
        VeganMeister = "Vegan Meister",
        VeganApprentice = "Vegan Apprentice",
        VeganStudent = "Vegan Student",
        VeganCurious = "Vegan Curious",
        VeganVirgin = "Vegan Virgin"
    }
    enum RankPoints {
        VeganMeister = 100,
        VeganApprentice = 70,
        VeganStudent = 40,
        VeganCurious = 10,
        VeganVirgin = 0
    }
    enum RankLogo {
        VeganMeister = "",
        VeganApprentice = "",
        VeganStudent = "",
        VeganCurious = "",
        VeganVirgin = ""
    }
}

