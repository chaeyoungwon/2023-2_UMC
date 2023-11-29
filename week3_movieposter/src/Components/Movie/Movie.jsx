import React, {useState} from "react";
import Detail from "../Detail";

function Movie({data}) {
    const [showDetail, setShowDetail] = useState(false);
    const {
        backdrop_path, original_title, overview, 
        popularity, poster_path, release_date, title, 
        vote_average, vote_count 
    } = data;

    

    const handleMouseOver =()=>{
        setShowDetail(true);
    };

    const handleMouseOut =() => {
        setShowDetail(false);
    };

    return (
        <div className="movie-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="image-container">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                
                <div className="text-container">
                    <h4>{title}</h4> 
                    <span>{vote_average}</span>
                </div>
                {showDetail && <Detail data={{title,overview}}/>}
            </div>
            
        </div>
    );
}


export default Movie;