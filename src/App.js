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

  render() {
    let contextValue = {
      latLong: this.state.latLong,
      location: this.state.location,
      dateMeal: this.state.dateMeal,
      dateDrink: this.state.dateDrink,

      handleSetLocation: this.handleSetLocation,
      handleSetDateMeal: this.handleSetDateMeal,
      handleSetDateDrink: this.handleSetDateDrink
    }

    console.log(this.state.dateMeal);
    console.log(this.state.dateDrink);
    console.log('app location ', this.state.location);
    console.log('app latlong ', this.state.latLong)

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
