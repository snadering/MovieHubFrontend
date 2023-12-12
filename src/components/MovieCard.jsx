const MovieCard = ({ title, vote_count, vote_average }) => { 

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg border border-black">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">Rating: {vote_average}</p>
          <p className="text-gray-700 text-base">Votes: {vote_count}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
