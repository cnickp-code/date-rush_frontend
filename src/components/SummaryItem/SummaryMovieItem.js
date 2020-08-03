import React from 'react';
import DRContext from '../../context/DRContext';
import ExtApiService from '../../services/external-api-service';

class SummaryMovieItem extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            show: null
        }
    }

    componentDidMount() {
        console.log('mounted');
        if(this.context.dateShow.type === 'Movie') {
            ExtApiService.getMovieById(this.context.dateShow.id)
            .then(show => {
                console.log(show);
                this.setState({
                    show,
                    loading: false
                })
            })
        } else {
            ExtApiService.getTvShowById(this.context.dateShow.id)
            .then(show => {
                console.log(show);
                this.setState({
                    show,
                    loading: false
                })
            })
        }

    }
    render() {
        console.log(this.context.dateShow);
        console.log(this.state.show);
        
        let genres = [];

        if(!this.state.loading) {
            this.state.show.genres.forEach(genre => {
                genres.push(genre.name);
            })
    
            genres = genres.join(', ');
        }



        return (
            <div className="summary-container">
                <div className=" edit-container">
                    <i className="fas fa-edit"></i>
                </div>

                {!this.state.loading && 
                <>
                    <h3 className="text-center mb-10">{this.state.show.title}</h3>
                    <p className="text-center">
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.show.poster_path}`} className="preview-image mb-10" />
                    </p>

                    <p className="text-center">Genre(s): {genres}</p>

                    <div className="divider center mb-20 mt-20"></div>

                    <p className="text-center"> Rating: {this.state.show.vote_average} out of 10</p>

                    <div className="divider center mb-20 mt-20"></div>

                    <p className="text-justify">{this.state.show.overview}</p> 
                </>}
            </div>
        )
    }
}

export default SummaryMovieItem;