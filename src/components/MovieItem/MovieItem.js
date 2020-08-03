import React from 'react';
import DRContext from '../../context/DRContext';

class MovieItem extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="main-container">
                <h3 className="text-center mb-10">{this.props.show.title}</h3>
                <p className="text-center">
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.show.poster_path}`} className="preview-image mb-10" />
                </p>

                <p className="text-center"> Rating: {this.props.show.vote_average} out of 10</p>

                <div className="divider center mb-20 mt-20"></div>

                <p className="text-justify">{this.props.show.overview}</p>



            </div>
        )
    }
}

export default MovieItem;