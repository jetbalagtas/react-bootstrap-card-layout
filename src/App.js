import React from "react";

import CardList from "./components/CardList";

const App = () => {
  const productCards = [
    {
      id: 1,
      Heading: "tempor do tempor",
      Subheading: "ipsum et",
      Price: 22000
    },
    {
      id: 2,
      Heading: "lorem",
      Subheading: "do incididunt",
      Price: 33000
    },
    {
      id: 3,
      Heading: "ut magna ipsum",
      Subheading: "labore sed",
      Price: 14000
    },
    {
      id: 4,
      Heading: "lorem incididunt elit",
      Subheading: "aliqua ipsum",
      Price: 43000,
      showBridge: true
    },
    {
      id: 5,
      Heading: "adipiscing ipsum do et do elit eiusmod",
      Subheading: "et dolor",
      Price: 27000
    },
    {
      id: 6,
      Heading: "magna lorem",
      Subheading: "eisumod do",
      Price: 15000
    },
    {
      id: 7,
      Heading: "ipsum",
      Subheading: "elit elit",
      Price: 43000
    },
    {
      id: 8,
      Heading: "sed eiusmod",
      Subheading: "consectetur dolor",
      Price: 25000
    },
    {
      id: 9,
      Heading: "labore eiusmod elit ipsum aliqua sit lore ipsum",
      Subheading: "aliqua sed",
      Price: 37000,
      showBridge: true
    },
    {
      id: 10,
      Heading: "aliqua ipsum sed ut elit",
      Subheading: "tempor aliqua",
      Price: 1000
    },
    {
      id: 11,
      Heading: "aliqua",
      Subheading: "elit ut",
      Price: 4000
    },
    {
      id: 12,
      Heading: "amet adipiscing",
      Subheading: "eisumod sit",
      Price: 23000
    }
  ];

  return <CardList productCards={productCards} />;
};

export default App;
