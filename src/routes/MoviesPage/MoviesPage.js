import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MovieItem from '../../components/MovieItem/MovieItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import DRContext from '../../context/DRContext';
import ExtApiService from '../../services/external-api-service';
import { Redirect } from 'react-router-dom';
import SetNameOverlay from '../../components/SetNameOverlay/SetNameOverlay';
import { Spring } from 'react-spring/renderprops'

class MoviesPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            category: null,
            catPicked: false,
            selectedCategory: null,
            movie: false,
            tv: false,
            showBool: false,
            mainShow: {},
        }
    }

    handleSetCategory = (category) => {
        let start = Math.floor(Math.random() * Math.floor(500));
        let randIndex = Math.floor(Math.random() * Math.floor(20));

        if (category === 'Movie') {
            ExtApiService.getMoviesByPopularity(start)
                .then(movies => {
                    const randMovie = movies.results[randIndex];
                    this.setState({
                        movie: true,
                        tv: false,
                        showBool: true,
                        mainShow: randMovie,
                        forward: false,
                        catPicked: true,
                        selectedCategory: category
                    })
                })
        } else {
            ExtApiService.getTvShowsByPopularity(start)
                .then(shows => {
                    const randShow = shows.results[randIndex];
                    this.setState({
                        movie: false,
                        tv: true,
                        showBool: true,
                        mainShow: randShow,
                        catPicked: true,
                        selectedCategory: category
                    })
                })
        }
    }

    handleRandom = () => {
        let start = Math.floor(Math.random() * Math.floor(500));
        let randIndex = Math.floor(Math.random() * Math.floor(20));

        if (this.state.movie) {
            ExtApiService.getMoviesByPopularity(start)
                .then(movies => {
                    const randMovie = movies.results[randIndex];
                    this.setState({
                        mainShow: randMovie
                    })
                })
        } else {
            ExtApiService.getTvShowsByPopularity(start)
                .then(shows => {
                    const randShow = shows.results[randIndex];
                    this.setState({
                        mainShow: randShow
                    })
                })
        }
    }

    handleAddShow = () => {
        let type = 'TV';
        if (this.state.movie) {
            type = 'Movie';
        }

        let showObj = {
            id: this.state.mainShow.id,
            type
        }
        this.context.handleSetDateShow(showObj);
        this.context.handleShowNameOverlay(true);

    }

    // handleForward = () => {

    // }

    // handleSetPopularity = (value) => {
    //     this.setState({
    //         popularity: value
    //     })
    // }

    render() {
        let categoryArray = ['Movie', 'TV'];
        console.log(this.state.mainShow);

        if (this.context.places.length < 1 || this.context.location === null || this.context.latLong === null) {
            return <Redirect to='/home'></Redirect>
        }

        if (this.state.forward) {
            return <Redirect to='/profile'></Redirect>
        }
        return (
            <>
                {/* {this.context.nameOverlayShow && <SetNameOverlay handleForward={this.props.handleForward} />} */}

                <section>
                    <h2 className="summary-title center text-center mb-10 mt-10">STEP 4 / What to Watch?</h2>

                    <div className="page-location-container center">
                        <p className="text-center"><i class="fas fa-map-marked-alt"></i> Current Location: {this.context.location}</p>
                    </div>
                    <CategorySelect selectedCategory={this.state.selectedCategory} onCategorySelect={this.handleSetCategory} categories={categoryArray} />

                    {/* <div className="popularity-container center mt-20 mb-20">
                        <h4 className="text-center">Select popularity:</h4>
                        <p className="text-center fs-xs"><i>1 = Obscure, 100 = Popular</i></p>
                        <Slider onChange={this.handleSetPopularity} value={this.state.popularity}/>
                    </div> */}


                    {this.state.showBool && <div className="button-container">
                        <button
                            className="prev-next-button pad-5 item-btn"
                            onClick={this.handleRandom}
                        >Next</button>
                    </div>}
                </section>

                <section>
                    {this.state.showBool &&
                        <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            config={{ delay: 500 }}
                        >
                            {props => (
                                <div style={props}>
                                    <MovieItem movieBool={this.state.movie} show={this.state.mainShow} />
                                </div>

                            )}
                        </Spring>
                    }

                    {this.state.showBool && <div className="add-button-container mt-20 mb-20">
                        <button
                            className="add-button pad-5 center item-btn"
                            onClick={this.handleAddShow}
                        >Complete Date</button>
                    </div>}

                    {/* <QuickBuildTracker /> */}
                </section>
            </>
        )
    }
}

export default MoviesPage;