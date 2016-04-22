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
var Splash = require('../components/Splash');
var Demo = require('../components/Demo');


var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Splash}/>
			<Route path="Demo" header="Isotope Demo" component={Demo}/>
		</Route>
	</Router>
);

module.exports = routes;