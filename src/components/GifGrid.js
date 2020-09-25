import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs();

  const [images, setImages] = useState([]);

  /* El segundo parametro es una lista de dependencias,
  si esta vacio solo se ejecutara una Sola Vez */
  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>

      {/* {loading ? "Cargando..." : "Fin de Carga"} */}
      
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;

          // return <GifGridItem key={img.id} img={img} />;
          // return <li key={gif.id}>{gif.title}</li>;a
        })}
      </div>
    </>
  );
};

// GifGrid.propTypes = {};
