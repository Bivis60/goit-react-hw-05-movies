// import { useEffect } from "react";

import { Link } from "react-router-dom";

const Movies = () => {
  // useEffect(() => {});
  return (
    <div>
      {[
        'Movies-1',
        'Movies-2',
        'Movies-3',
        'Movies-4',
        'Movies-5',
        'Movies-6',
        'Movies-7',
        'Movies-8',
      ].map(movie => {
        return <Link key={movie} to={`${movie}`}>{movie}</Link>;
      })}
    </div>
  );
};

export default Movies;
