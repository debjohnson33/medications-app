import React from 'react';
import { NavLink } from 'react-router-dom';
import './Medication.css';

const link = {
	width: '100px',
	padding: '14px',
	margin: '6px',
	background: '#D46A6A',
	textDecoration: 'none',
	color: 'white',
}

const Navbar = () => 
	<div className="nav">
		<br />
		<NavLink
		to='/'
		exact
		style={link}
		>Home</NavLink>

		<NavLink
		to='/medications'
		exact
		style={link}
		>Medications</NavLink>

		<NavLink
		to='/medications/about'
		exact
		style={link}
		>About</NavLink>
	</div>

export default Navbar;

