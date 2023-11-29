import Movie from './MovieContainer';

function Detail({data}){

    const {overview,  title} = data;

    return(
        <div className="detail-container">
            <div>
                <h4> {title} </h4>
                <p> {overview} </p>
            </div>
        </div>
    );
}

export default Detail;