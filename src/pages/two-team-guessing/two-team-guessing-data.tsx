import { FlippableGridItem } from "../../types/grid-item";

export const TwoTeamGuessingGridItems: FlippableGridItem[][] = [
  [
    {
      front: { title: "1" },
      back: { title: "Cotton Candy", image_src: "cotton-candy.png" },
    },
    {
      front: { title: "2" },
      back: { title: "Purple Velvet", image_src: "purple-velvet.png" },
    },
    {
      front: { title: "3" },
      back: { title: "Kettle Corn", image_src: "kettlecorn.png" },
    },
    {
      front: { title: "4" },
      back: {
        title: "Sticky Toffee Pudding",
        image_src: "sticky-toffee-pudding.png",
      },
    },
    {
      front: { title: "5" },
      back: {
        title: "Peanut Butter Fudge Pretzel",
        image_src: "pb-fudge-pretzel.png",
      },
    },
  ],
  [
    {
      front: { title: "6" },
      back: { title: "Chocolate Peanut Butter", image_src: "chocolate-pb.png" },
    },
    { front: { title: "7" }, back: { title: "Lemon", image_src: "lemon.png" } },
    {
      front: { title: "8" },
      back: { title: "Milkshake & Fries", image_src: "milkshake-fries.png" },
    },
    {
      front: { title: "9" },
      back: { title: "Apple Pie", image_src: "apple-pie.png" },
    },
    {
      front: { title: "10" },
      back: {
        title: "Honey Cornbread & Jam",
        image_src: "honey-cornbread-jam.png",
      },
    },
  ],
  [
    {
      front: { title: "11" },
      back: { title: "Cranberry Crumble", image_src: "cranberry-crumble.png" },
    },
    {
      front: { title: "12" },
      back: { title: "Mac & Cheese", image_src: "mac-n-cheese.png" },
    },
    {
      front: { title: "13" },
      back: { title: "Pickle", image_src: "pickle.png" },
    },
    {
      front: { title: "14" },
      back: { title: "Fudge Brownie", image_src: "fudge-brownie.png" },
    },
    {
      front: { title: "15" },
      back: { title: "Vanilla Bean", image_src: "vanilla-bean.png" },
    },
  ],
];

export enum TwoTeamGuessingTeams {
  RED = "RED",
  BLUE = "BLUE",
}
