/**
 * Created by ifthenelse on 4/17/16.
 * Focused
 * Independent
 * Reusable
 * Small
 * Testable
 */
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
require('./styles/layout/common.scss');
require('./styles/base/buttons.scss');
require('./styles/pages/transitions.scss');

ReactDOM.render(routes, document.getElementById('app'));