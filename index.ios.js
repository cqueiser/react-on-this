/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var VideoPlayer = require ('./VideoPlayer');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var ReactOnThis = React.createClass({
  render: function() {
    return (
      <VideoPlayer />
    );
  }
});

AppRegistry.registerComponent('ReactOnThis', () => ReactOnThis);
