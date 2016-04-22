/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var propTypes = React.PropTypes;

var styles = {
	container: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop: '30px'
	}
};

var Loading = React.createClass({
	propTypes: {
		text: propTypes.string,
		speed: propTypes.number
	},
	getDefaultProps: function() {
		return {
			text: 'Loading',
			speed: 300
		}
	},
	getInitialState: function() {
		// not anti-pattern since this is seed data for internal state
		this.originalText = this.props.text;
		return {
			text: this.originalText
		}
	},
	componentDidMount: function() {
		var stopper = this.originalText + '...';
		this.interval = setInterval(() => {
			if(this.state.text === stopper) {
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}, this.props.speed)
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return(
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
			</div>
		);
	}
});

module.exports = Loading;