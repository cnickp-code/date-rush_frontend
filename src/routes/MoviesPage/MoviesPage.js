import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MovieItem from '../../components/MovieItem/MovieItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import DRContext from '../../context/DRContext';
import ExtApiService from '../../services/external-api-service';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

class MoviesPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            category: null,
            movie: false,
            tv: false,
            showBool: false,
            mainShow: {},
        }
    }

    handleSetCategory = (category) => {
        let start = Math.floor(Math.random() * Math.floor(500));
        let randIndex = Math.floor(Math.random() * Math.floor(20));

        if(category === 'Movie') {
            ExtApiService.getMoviesByPopularity(start)
                .then(movies => {
                    const randMovie = movies.results[randIndex];
                    this.setState({
                        movie: true,
                        tv: false,
                        showBool: true,
                        mainShow: randMovie
                    })
                })
        } else {
            ExtApiService.getMoviesByPopularity(start)
            .then(shows => {
                const randShow = shows.results[randIndex];
                this.setState({
                    movie: false,
                    tv: true,
                    showBool: true,
                    mainShow: randShow
                })
            })
        }
    }

    handleRandom = () => {
        let start = Math.floor(Math.random() * Math.floor(500));
        let randIndex = Math.floor(Math.random() * Math.floor(20));

        if(this.state.movie) {
            ExtApiService.getMoviesByPopularity(start)
                .then(movies => {
                    const randMovie = movies.results[randIndex];
                    this.setState({
                        mainShow: randMovie
                    })
                })
        } else {
            ExtApiService.getMoviesByPopularity(start)
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
        if(this.state.movie) {
            type = 'Movie';
        }

        let showObj = {
            id: this.state.mainShow.id,
            type
        }
        this.context.handleSetDateShow(showObj);
    }

    // handleSetPopularity = (value) => {
    //     this.setState({
    //         popularity: value
    //     })
    // }

    render() {
        let categoryArray = ['Movie', 'TV'];
        console.log(this.state.mainShow);
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">STEP 4 / What to Watch?</h2>

                    <CategorySelect onCategorySelect={this.handleSetCategory} categories={categoryArray}/>

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
                    {this.state.showBool && <MovieItem show={this.state.mainShow} />}

                    {this.state.showBool && <div className="add-button-container mt-20 mb-20">
                        <button 
                        className="add-button pad-5 center item-btn"
                        onClick={this.handleAddShow}
                        >Add To Date</button>
                    </div>}

                    <QuickBuildTracker />
                </section>
            </main>
        )
    }
}

export default MoviesPage;