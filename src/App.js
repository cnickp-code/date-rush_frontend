import React from 'react';
import './App.css';
import Routes from './Routes';
import DRContext from './context/DRContext'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latLong: null,
      location: null,
      dateMeal: null,
      dateDrink: null,
      places: [],
      loading: false,
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

  render() {
    let contextValue = {
      latLong: this.state.latLong,
      location: this.state.location,
      dateMeal: this.state.dateMeal,
      dateDrink: this.state.dateDrink,
      places: this.state.places,
      loading: this.state.loading,

      handleSetLocation: this.handleSetLocation,
      handleSetDateMeal: this.handleSetDateMeal,
      handleSetDateDrink: this.handleSetDateDrink,
      handleSetPlaces: this.handleSetPlaces,
      handleSetLoader: this.handleSetLoader
    }

    console.log(this.state.dateMeal);
    console.log(this.state.dateDrink);
    console.log('app location ', this.state.location);
    console.log('app latlong ', this.state.latLong)
    console.log(this.state.places);

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
