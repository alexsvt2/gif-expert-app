import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);

  /* El segundo parametro es una lista de dependencias, 
  si esta vacio solo se ejecutara una Sola Vez */
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const API_KEY = "WicPdNasmrk8dnx8CRSEH9jsKAevtlAL";
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=${limit}&api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      console.log(img);
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;

          // return <GifGridItem key={img.id} img={img} />;
          // return <li key={gif.id}>{gif.title}</li>;a
        })}
      </div>
    </>
  );
}

GifGrid.propTypes = {};

export default GifGrid;
