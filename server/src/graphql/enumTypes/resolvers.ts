export const enumTypesResolverMap = {
  GeoJSONPointType: () => {
    return "Point";
  },
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
  }
};
