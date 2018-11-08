import React from 'react';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => (
	<div>
		{medications.map(medication => 
			<p key={medication.id}><Link 
				key={medication.id}
				to={`/medications/${medication.id}`} 
			>{medication.name}
			</Link> - {medication.generic_name}</p>
		)}
	</div>
);

export default MedicationsList;

