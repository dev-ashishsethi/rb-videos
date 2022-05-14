import panchayat from "../../assets/panchayat.jpg";
import ishq from "../../assets/ishq.jpg";
import ohmydog from "../../assets/ohmydog.jpeg";
import gucci from "../../assets/gucci.jpeg";
import { v4 as uuid } from "uuid";

export const carousel = [
    {
      _id: uuid(),
      name: "Panchayat",
      image:panchayat,
    },
    {
      _id: uuid(),
      name: "ishq",
      image:ishq,
    },
    {
      _id: uuid(),
      name: "ohmydog",
      image:ohmydog,
    },
    {
      _id: uuid(),
      name: "gucci",
      image:gucci,
    },
  ];