import React, { Component } from 'react';
import './App.css';
import { GoogleMapComponent, NavBar, ExampleComponent1, Earthquakes, Loans, Footer } from './routes'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'lowesLocations',
      page: <GoogleMapComponent />
    }
  }
  
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name === 'lowesLocations') {
    this.setState({page: <GoogleMapComponent />})
    }
    if (name === 'earth') {
    this.setState({page: <Earthquakes />})
    }
    if (name === 'loans') {
      this.setState({page: <Loans />})
    }
}

  render() {
  return (
    <div className="App">
    <ExampleComponent1/>
      <NavBar 
        handleItemClick={this.handleItemClick}
        activeItem={this.state.activeItem}
        />
        {this.state.page}
        <Footer />
    </div>
  );
}
}

export default App;
