import { find, filter } from "lodash";
import { posts } from "../post/resolvers";

import { UserN } from "../../@types";

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
console.log("users", users);
export const resolvers = {
  RankNamesType: {
    VeganMeisterName: "Vegan Meister",
    VeganApprenticeName: "Vegan Apprentice",
    VeganStudentName: "Vegan Student",
    VeganCuriousName: "Vegan Curious",
    VeganVirginName: "Vegan Virgin"
  },
  RankPointsType: {
    VeganMeisterPoint: 100,
    VeganApprenticePoint: 70,
    VeganStudentPoint: 40,
    VeganCuriousPoint: 10,
    VeganVirginPoint: 0
  },
  RankLogosType: {
    VeganMeisterLogo: "",
    VeganApprenticeLogo: "",
    VeganStudentLogo: "",
    VeganCuriousLogo: "",
    VeganVirginLogo: ""
  },
  Query: {
    users: (): UserN.UsersT => users,
    user: (_: any, _id: string): UserN.UserI | undefined => find(users, _id)
  }
};
