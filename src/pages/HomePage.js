import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab mollitia sunt ducimus possimus, expedita commodi nesciunt quam dolores, delectus voluptatem minus quisquam, sapiente labore in animi cum dolor quo!"
  },
  {
    id: 2,
    title: "Czym jest paradoks Fermiego",
    author: "Adam Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab mollitia sunt ducimus possimus, expedita commodi nesciunt quam dolores, delectus voluptatem minus quisquam, sapiente labore in animi cum dolor quo!"
  },
  {
    id: 3,
    title: "Ciemna energia i ciemna materia",
    author: "Bogdan Energia",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab mollitia sunt ducimus possimus, expedita commodi nesciunt quam dolores, delectus voluptatem minus quisquam, sapiente labore in animi cum dolor quo!"
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article id={article.id} {...article} />
  ));
  return <div>{artList}</div>;
};

export default HomePage;
