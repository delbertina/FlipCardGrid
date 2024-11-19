import { FlippableGridData } from "../types/grid-item";

export const IceCream2023: FlippableGridData = {
  id: 1,
  title: "Ice Cream 2023",
  gridItems: [
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
        back: {
          title: "Chocolate Peanut Butter",
          image_src: "chocolate-pb.png",
        },
      },
      {
        front: { title: "7" },
        back: { title: "Lemon", image_src: "lemon.png" },
      },
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
        back: {
          title: "Cranberry Crumble",
          image_src: "cranberry-crumble.png",
        },
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
  ],
};

export const IceCream2024: FlippableGridData = {
  id: 2,
  title: "Ice Cream 2024",
  gridItems: [
    [
      {
        front: { title: "1" },
        back: { title: "King Alphonso", image_src: "alphonso-mango.png" },
      },
      {
        front: { title: "2" },
        back: { title: "Apple Cinnamon", image_src: "apple-cinn.png" },
      },
      {
        front: { title: "3" },
        back: { title: "Black Cherry Chip", image_src: "black-cherry-chip.png" },
      },
      {
        front: { title: "4" },
        back: { title: "Malai", image_src: "buffalo-milk.png" },
      },
      {
        front: { title: "5" },
        back: { title: "Butterscotch", image_src: "butterscotch.png" },
      },
    ],
    [
      {
        front: { title: "6" },
        back: { title: "Coffee Affogato", image_src: "coffee-affogato.png" },
      },
      {
        front: { title: "7" },
        back: { title: "Cookie Butter", image_src: "cookie-butter.png" },
      },
      {
        front: { title: "8" },
        back: { title: "Rajbhog", image_src: "honey-cardamom-saffron.png" },
      },
      {
        front: { title: "9" },
        back: { title: "Peanut Butter Brownie Honeycomb", image_src: "peanutbutter-brownie-honeycomb.png" },
      },
      {
        front: { title: "10" },
        back: { title: "Praline Butter Cake", image_src: "praline-butter-cake.png" },
      },
    ],
    [
      {
        front: { title: "11" },
        back: { title: "Red Velvet", image_src: "red-velvet.png" },
      },
      {
        front: { title: "12" },
        back: { title: "Salted Chocolate Truffle", image_src: "salted-chocolate-truffle.png" },
      },
      {
        front: { title: "13" },
        back: { title: "Pickle", image_src: "pickle.png" },
      },
      {
        front: { title: "14" },
        back: { title: "Strawberry", image_src: "strawberry.png" },
      },
      {
        front: { title: "15" },
        back: { title: "Thai Iced Tea", image_src: "thai-iced-tea.png" },
      },
    ],
  ],
};

export const Games: FlippableGridData[] = [
  IceCream2023,
  IceCream2024,
];

export enum TwoTeamGuessingTeams {
  RED = "RED",
  BLUE = "BLUE",
}
