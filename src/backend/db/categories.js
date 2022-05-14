import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
    categoryId: 24,
  },
  {
    _id: uuid(),
    categoryName: "Thriller",
    categoryId: 11,
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    categoryId: 1,
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    categoryId: 22,
  },
];
