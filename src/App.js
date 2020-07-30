import React from 'react';
import './App.css';
import Routes from './Routes';
import DRContext from './context/DRContext'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateMeal: null,
      dateDrink: null,
    }
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
      dateMeal: this.state.dateMeal,
      dateDrink: this.state.dateDrink,

      handleSetDateMeal: this.handleSetDateMeal,
      handleSetDateDrink: this.handleSetDateDrink
    }

    console.log(this.state.dateMeal);
    console.log(this.state.dateDrink);

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
