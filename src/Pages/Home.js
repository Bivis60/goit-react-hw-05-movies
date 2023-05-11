import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const Respons = () => {
      return fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=703a530d44c5942c47c279e3d1ee1c84`
      ).then(res => res.json())
      .then((value) => {
      console.log(value);  
      })
    };
    Respons();
  }, []);
  return <h1>Home</h1>;
};

export default Home;
