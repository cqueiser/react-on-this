/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var VideoPlayer = require ('./VideoPlayer');
var MOCKED_VIDEO_DATA = [
  {"videoId":"MOVIE_11584253","formatName":"She Keeps Bees","clipTitle":"Is What It Is","source":"http://is.myvideo.de/movie23/95/11584253.mp4","image":"http://is.myvideo.de/movie23/95/thumbs/11584253_1.jpg"},
  {"videoId":"MOVIE_11582975","formatName":"Pato Siebenhaar","clipTitle":"Fuld Af Løgn","source":"http://is.myvideo.de/movie18/db/11582975.mp4","image":"http://is.myvideo.de/movie18/db/thumbs/11582975_1.jpg"}];

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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    fontSize: 16,
    margin: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactOnThis', () => ReactOnThis);
