import React, { useState } from "react";
import * as S from "../styles/MovieStyles";
import Detail from "./Detail";

function Movie({ data }) {
    const [showDetail, setShowDetail] = useState(false);
    const {
        backdrop_path, original_title, overview, 
        popularity, poster_path, release_date, title, 
        vote_average, vote_count 
    } = data;

    const handleMouseOver = () => {
        setShowDetail(true);
    };

    const handleMouseOut = () => {
        setShowDetail(false);
    };

    return (
        <S.MovieContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <S.ImageContainer>
                <S.MovieImage src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                
                <S.TextContainer>
                    <S.MovieTitle>{title}</S.MovieTitle> 
                    <S.VoteAverage>{vote_average}</S.VoteAverage>
                </S.TextContainer>
                {showDetail && <Detail data={{ title, overview }} />}
            </S.ImageContainer>
        </S.MovieContainer>
    );
}

export default Movie;