/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Video = require('react-native-video');
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

var VideoPlayer = React.createClass({
  getInitialState: function() {
    return {
      index: 0,
      video: MOCKED_VIDEO_DATA[0]
    }
  },
  onLoad: function() {
    console.log('loaded');
  },
  _onPressButton: function() {
    this.getNextVideo();
  },
  getNextVideo: function() {
    var index = this.state.index;
    index++;
    this.setState({'index': index});
  //  return this.getVideoData();
  },
  getVideoData: function(){
    return MOCKED_VIDEO_DATA[this.state.index]
  },
  render: function() {
    var video = this.getVideoData();
    console.log(video.source);
    return (
      <View style={styles.container}>
        <Video source={{uri: video.source}} // Can be a URL or a local file.
               rate={1.0}                   // 0 is paused, 1 is normal.
               volume={1.0}                 // 0 is muted, 1 is normal.
               muted={false}                // Mutes the audio entirely.
               paused={false}               // Pauses playback entirely.
               resizeMode="cover"           // Fill the whole screen at aspect ratio.
               repeat={false}                // Repeat forever.
               onLoad={this.onLoad}    // Callback when video loads
               onProgress={this.setTime}    // Callback every ~250ms with currentTime
               onEnd={this.onEnd}           // Callback when playback finishes
               style={styles.backgroundVideo} />
        <Text style={styles.welcome}>
          {video.clipTitle}
        </Text>

          <TouchableHighlight onPress={this._onPressButton} style="{styles.button}">
            <Text style={styles.welcome}>Hit</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this._onPressButton} style="{styles.button}">
            <Text style={styles.welcome}>Shit</Text>
          </TouchableHighlight>

          </View>

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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

module.exports = VideoPlayer;
