import { find, filter } from "lodash";
import { posts } from "../post/resolvers";

import { UserN } from "../../@types";
const ranks: UserN.RanksT = [
  {
    name: "Vegan Meister" as UserN.RankNames.VeganMeister,
    points: 100 as UserN.RankPoints.VeganMeister,
    logo: "" as UserN.RankLogo.VeganMeister
  },
  {
    name: "Vegan Apprentice" as UserN.RankNames.VeganApprentice,
    points: 70 as UserN.RankPoints.VeganApprentice,
    logo: "" as UserN.RankLogo.VeganApprentice
  },
  {
    name: "Vegan Student" as UserN.RankNames.VeganStudent,
    points: 40 as UserN.RankPoints.VeganStudent,
    logo: "" as UserN.RankLogo.VeganStudent
  },
  {
    name: "Vegan Curious" as UserN.RankNames.VeganCurious,
    points: 10 as UserN.RankPoints.VeganCurious,
    logo: "" as UserN.RankLogo.VeganCurious
  },
  {
    name: "Vegan Virgin" as UserN.RankNames.VeganVirgin,
    points: 0 as UserN.RankPoints.VeganVirgin,
    logo: "" as UserN.RankLogo.VeganVirgin
  }
];
const users: UserN.UsersT = [
  {
    _id: "1",
    username: "TheVeganmeister",
    name: "Shmulik",
    surname: "Goldfein",
    email: "test@test.com",
    password: "test123",
    avatar: "",
    posts: posts,
    rank: {
      name: "Vegan Meister" as UserN.RankNames.VeganMeister,
      points: 100 as UserN.RankPoints.VeganMeister,
      logo: "" as UserN.RankLogo.VeganMeister
    },
    isAdmin: true
  },
  {
    _id: "2",
    username: "User2",
    name: "User",
    surname: "2",
    email: "test2@test.com",
    password: "test123",
    avatar: "",
    posts: [],
    rank: {
      name: "Vegan Virgin" as UserN.RankNames.VeganVirgin,
      points: 0 as UserN.RankPoints.VeganVirgin,
      logo: "" as UserN.RankLogo.VeganVirgin
    },
    isAdmin: false
  }
];

export const resolvers = {
  Query: {
    users: (): UserN.UsersT => users,
    user: (_: any, _id: string): UserN.UserI | undefined => find(users, _id)
  }
};
