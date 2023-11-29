import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export default function MovieDetail(){
    //url로 넘겨 받은 title
    const { title } = useParams(); 
		//네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
		//이미지, 별점 등의 모든 정보들
    const location = useLocation();
    const { backImg } = location.state || {};

    return (
		<div>
            <h1 style={{ color: 'black' }}>Movie:</h1>
            {backImg && (
                <img src={IMG_BASE_URL + backImg} alt="Movie Poster" width="300" />
            )}
            <h2 style={{ color: 'black' }}>{title}</h2>
        </div>
    );
};