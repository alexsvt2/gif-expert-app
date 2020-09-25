import { useState } from "react";

export const useFetchGifs = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  setTimeout(() => {
    setState({
      data: [12, 3, 4, 5, 65, 7],
      loading: false,
    });
  }, 3000);
  return state;
};
