/**
 * Created by ifthenelse on 4/22/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../containers/MainContainer');

const IsotopeStart = React.createClass({
	render: function() {
		return (
			<MainContainer>
				<h1>Isotope Clone!!!</h1>
				<Link to="/Demo">
					<button className="btn btn-lg btn-success">Go to Demo</button>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = IsotopeStart;
