import React from 'react';
import './App.css';
import Routes from './Routes';
import DRContext from './context/DRContext'
import ExtApiService from './services/external-api-service';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latLong: null,
      location: null,
      dateMeal: {},
      dateDrink: null,
      dateActivity: null,
      dateShow: null,
      places: [],
      loading: false,
      movieGenres: [],
      tvGenres: [],
    }
  }

  handleSetLocation = (latLong, location) => {
    this.setState({
      latLong,
      location
    })
  }

  handleSetDateMeal = (id) => {
    this.setState({
      dateMeal: id
    })
  }

  handleSetDateDrink = (id) => {
    this.setState({
      dateDrink: id
    })
  }

  handleSetPlaces = (places) => {
    this.setState({
      places
    })
  }

  handleSetLoader = (loadBool) => {
    this.setState({
      loading: loadBool
    })
  }

  handleSetDateActivity = (id) => {
    this.setState({
      dateActivity: id
    })
  }

  handleSetDateShow = (obj) => {
    this.setState({
      dateShow: obj
    })
  }

  componentDidMount() {
    ExtApiService.getMovieGenres()
      .then(results => {
        this.setState({
          movieGenres: results.genres
        })
      })

    ExtApiService.getTvGenres()
      .then(results => {
        this.setState({
          tvGenres: results.genres
        })
      })
  }

  render() {
    let contextValue = {
      latLong: this.state.latLong,
      location: this.state.location,
      dateMeal: this.state.dateMeal,
      dateDrink: this.state.dateDrink,
      dateActivity: this.state.dateActivity,
      dateShow: this.state.dateShow,
      places: this.state.places,
      loading: this.state.loading,
      movieGenres: this.state.movieGenres,
      tvGenres: this.state.tvGenres,

      handleSetLocation: this.handleSetLocation,
      handleSetDateMeal: this.handleSetDateMeal,
      handleSetDateDrink: this.handleSetDateDrink,
      handleSetPlaces: this.handleSetPlaces,
      handleSetLoader: this.handleSetLoader,
      handleSetDateActivity: this.handleSetDateActivity,
      handleSetDateShow: this.handleSetDateShow,
    }

    console.log('DATE OBJECTS: ')
    console.log('Meal: ', this.state.dateMeal);
    console.log('Drink: ', this.state.dateDrink);
    console.log('Activity: ', this.state.dateActivity);
    console.log('Show: ', this.state.dateShow);
    console.log('--------------------')
    console.log('app location ', this.state.location);
    console.log('app latlong ', this.state.latLong)
    console.log(this.state.places);
    console.log('genres:')
    console.log(this.state.tvGenres);
    console.log(this.state.movieGenres);


    return (
      <div className="App">
        <DRContext.Provider value={contextValue}>
          <Routes />
        </DRContext.Provider>

      </div>
    );
  }

}

export default App;
