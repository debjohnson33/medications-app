import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MedicationsPage from './MedicationsPage';
import Medication from '../components/Medication';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import './App.css';
import MedicationForm from '../components/MedicationForm';
import ReviewForm from '../components/ReviewForm';
import About from '../components/About';
import Footer from '../components/Footer';

class App extends Component {

  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Navbar />
	      	<Switch>
	      		<Route exact path='/' component={Home}/>
	      		<Route exact path='/medications/new' component={MedicationForm}/>
	      		<Route exact path='/medications/about' component={About}/>
	      		<Route exact path='/medications/:id' component={Medication}/>
	      		<Route exact path='/medications/:id/reviews' component={ReviewForm}/>
	      		<Route exact path='/medications' component={MedicationsPage}/>
	      	</Switch>
	      	<Footer />
	      </div>
	    </Router>
    );
  }
}

export default App;