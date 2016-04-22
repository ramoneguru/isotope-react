/**
 * Created by ifthenelse on 4/21/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var IsotopeStart = require('../components/IsotopeStart');
var IsotopeDemo = require('../components/IsotopeDemo');


var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={IsotopeStart}/>
			<Route path="isotopeDemo" header="Isotope Demo" component={IsotopeDemo}/>
		</Route>
	</Router>
);

module.exports = routes;