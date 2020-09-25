export const getGifs = async (category) => {
  const API_KEY = "WicPdNasmrk8dnx8CRSEH9jsKAevtlAL";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=${API_KEY}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
