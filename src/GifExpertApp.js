import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
          // return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
