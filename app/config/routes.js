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
var AtomContainer = require('../containers/AtomContainer');


var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Splash}/>
			<Route path="atom" header="Isotope Demo" component={AtomContainer}/>
		</Route>
	</Router>
);

module.exports = routes;