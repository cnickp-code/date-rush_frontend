import React from 'react';
import './App.css';
import Routes from './Routes';
import DRContext from './context/DRContext'
import ExtApiService from './services/external-api-service';
import DateRushApiService from './services/dr-api-service';

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
      quickBuild: false,
      nameOverlayShow: false,
      myDates: [],
      summaryDate: null,
      step: 'Activity',
    }
  }

  handleSetDateStep = (step) => {
    this.setState({
      step
    })
  }

  handleReset = () => {
    this.setState({
      dateMeal: {},
      dateDrink: null,
      dateActivity: null,
      dateShow: null
    })
  }

  handleDeleteItem = (id) => {
    let newDates = this.state.myDates.filter(date => date.id !== id);

    this.setState({
      myDates: newDates
    })
  }

  handleSetDates = (dates) => {
    this.setState({
      myDates: dates
    })
  }

  handleSetSummaryDate = (date) => {
    this.setState({
      summaryDate: date
    })
  }

  handleAddProfileDate = (item) => {
    let newDates = [...this.state.myDates, item]

    this.setState({
      mydates: newDates,
      step: 'Activity'
    })
  }

  handleShowNameOverlay = (bool) => {
    console.log('toggle overlay');
    this.setState({
      nameOverlayShow: bool
    })
  }

  handleSetQuickBuild = () => {
    this.setState({
      quickBuild: !this.state.quickBuild
    })
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
    
    DateRushApiService.getDates()
      .then(results => {
        console.log('my dates ', results)
        this.setState({
          myDates: results
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
      quickBuild: this.state.quickBuild,
      nameOverlayShow: this.state.nameOverlayShow,
      myDates: this.state.myDates,
      summaryDate: this.state.summaryDate,
      step: this.state.step,

      handleSetLocation: this.handleSetLocation,
      handleSetDateMeal: this.handleSetDateMeal,
      handleSetDateDrink: this.handleSetDateDrink,
      handleSetPlaces: this.handleSetPlaces,
      handleSetLoader: this.handleSetLoader,
      handleSetDateActivity: this.handleSetDateActivity,
      handleSetDateShow: this.handleSetDateShow,
      handleSetQuickBuild: this.handleSetQuickBuild,
      handleShowNameOverlay: this.handleShowNameOverlay,
      handleAddProfileDate: this.handleAddProfileDate,
      handleSetSummaryDate: this.handleSetSummaryDate,
      handleSetDates: this.handleSetDates,
      handleReset: this.handleReset,
      handleDeleteItem: this.handleDeleteItem,
      handleSetDateStep: this.handleSetDateStep
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
    console.log('--------------------')
    console.log(this.state.nameOverlayShow)


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
