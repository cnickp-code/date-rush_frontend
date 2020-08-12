import React from 'react';
import DRContext from '../../context/DRContext';

class MovieItem extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.show.genre_ids);
        console.log(this.props.movieBool);
        console.log(this.context.movieGenres);
        let genres = [];
        if (this.props.movieBool) {
            this.props.show.genre_ids.forEach(id => {
                let size = this.context.movieGenres.length;
                for (let i = 0; i < size; i++) {
                    if (id === this.context.movieGenres[i].id) {
                        genres.push(this.context.movieGenres[i].name);
                    }
                }
            })
        } else {
            this.props.show.genre_ids.forEach(id => {
                let size = this.context.tvGenres.length;
                for (let i = 0; i < size; i++) {
                    if (id === this.context.tvGenres[i].id) {
                        genres.push(this.context.tvGenres[i].name);
                    }
                }
            })
        }

        console.log(genres);
        genres = genres.join(', ');
        console.log(this.props.show);
        console.log(genres);
        
        let title = this.props.show.title;

        if(!this.props.show.title){
            title = this.props.show.name;
        }

        return (
            <div className="main-container">
                <h3 className="text-center mb-10">{title}</h3>
                <div className="flex-container">
                    <div className="left-container">
                        <p className="text-center">
                            <img src={`https://image.tmdb.org/t/p/w500/${this.props.show.poster_path}`} className="preview-image mb-10" />
                        </p>
                    </div>

                    <div className="right-container">
                        <p className="text-center">Genre(s): {genres}</p>

                        <div className="divider center mb-20 mt-20"></div>

                        <p className="text-center"> Rating: {this.props.show.vote_average} out of 10</p>

                        <div className="divider center mb-20 mt-20"></div>

                        <p className="text-justify">{this.props.show.overview}</p>
                    </div>

                </div>






            </div>
        )
    }
}

export default MovieItem;