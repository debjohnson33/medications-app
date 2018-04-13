import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
	return (
		<div>
			<footer>
				<div className="row">
					<div className="col-4">
						<div className="box">
							<h3>About Medications App</h3>
							<Link to={`/medications/about`}>About</Link>
							<p>More Links Pending</p>
						</div>
					</div>
					<div className="col-4">
						<div className="box">
							<h3>External Links</h3>
							<a target="_blank" href="https://www.medicinenet.com/medications/article.htm" rel="noopener noreferrer" alt="Medicine Net Medication Index">Medicine Net Medication Index</a><br />
							<p>More Links Pending</p>
						</div>
					</div>
					<div className="col-4">
						<div className="box">
							<h3>Contact Us</h3>
							<a href="mailto:debjohnson_11@yahoo.com">Send email to developer</a>
							<p>On Slack: @debjohnson_11</p>						
						</div>
					</div>
				</div>
				
			</footer>
		</div>
	)
}

export default Footer;