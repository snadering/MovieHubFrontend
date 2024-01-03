import React from "react";

const MovieCard = ({ title, vote_count, vote_average, backdrop_path, baseUrl, backdropSize, rating}) => { 

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg border border-black">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div>
            <img
              src={`${baseUrl}${backdropSize}${backdrop_path}`}
              alt="Movie Image"
            />
          </div>

          <hr />
          <div className="flex justify-between">
            <div>
              <p className="text-gray-700 text-base mt-2">
                Rating: {vote_average.toFixed(1)}
              </p>
              <p className="text-gray-700 text-base">
                Votes: {vote_count.toFixed(0)}
              </p>
            </div>
            {rating && (
              <div>
                <p className="text-gray-700 text-base mt-2">
                  Your rating: {rating.toFixed(1)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
