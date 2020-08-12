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
        if (this.context.summaryDate.show_type === 'Movie') {
            ExtApiService.getMovieById(this.context.summaryDate.show_id)
                .then(show => {
                    console.log(show);
                    this.setState({
                        show,
                        loading: false
                    })
                })
        } else {
            ExtApiService.getTvShowById(this.context.summaryDate.show_id)
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
        let title;

        if (!this.state.loading) {
            this.state.show.genres.forEach(genre => {
                genres.push(genre.name);
            })

            genres = genres.join(', ');

            title = this.state.show.title;

            if (!this.state.show.title) {
                title = this.state.show.name;
            }
        }


        return (
            <div className="main-container">
                {/* <div className=" edit-container">
                    <i className="fas fa-edit"></i>
                </div> */}

                {!this.state.loading &&
                    <>
                        <h3 className="text-center mb-10">{title}</h3>
                        <p className="text-center mb-10">Category: {this.context.summaryDate.show_type}</p>
                        <div className="flex-container">


                            <div className="left-container">
                                <p className="text-center">
                                    <img src={`https://image.tmdb.org/t/p/w500/${this.state.show.poster_path}`} className="preview-image mb-10" />
                                </p>
                                
                            </div>
                            <div className="right-container">
                                <p className="text-center">Genre(s): {genres}</p>

                                <div className="divider center mb-20 mt-20"></div>

                                <p className="text-center"> Rating: {this.state.show.vote_average} out of 10</p>

                                <div className="divider center mb-20 mt-20"></div>

                                <p className="text-justify">{this.state.show.overview}</p>
                            </div>

                        </div>
                    </>}
            </div>
        )
    }
}

export default SummaryMovieItem;