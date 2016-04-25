/**
 * Created by ifthenelse on 4/21/16.
 */

var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
	render: function() {
		return (
			<div className='main-container'>
				<ReactCSSTransitionGroup
					transitionName="appear"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
				</ReactCSSTransitionGroup>

			</div>
		)
	}
});

module.exports = Main;
