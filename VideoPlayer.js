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
  _onPressHitButton: function() {
    console.log('hit');
    this.getNextVideo();
  },
  _onPressShitButton: function() {
    console.log('shit');
    this.getNextVideo();
  },
  getNextVideo: function() {
    var index = this.state.index;
    index++;
    if (index >= MOCKED_VIDEO_DATA.length) {
        index = 0;
    }
    this.setState({'index': index});
  //  return this.getVideoData();
  },
  getVideoData: function(){
    return MOCKED_VIDEO_DATA[this.state.index]
  },
  render: function() {
    var video = this.getVideoData();
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
        <Text style={styles.title}>
          {video.clipTitle}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this._onPressHitButton} style="{styles.button}">
            <Text style={styles.button}>HIT</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this._onPressShitButton} style="{styles.button}">
            <Text style={styles.button}>SHIT</Text>
          </TouchableHighlight>
        </View>
      </View>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
//    alignItems: 'center',
    //backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 14,
    color: '#DDDDDD',
    margin: 10,
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
    textAlign: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    marginLeft: 120,
    marginRight: 120,
    color: '#DDDDDD',
    width: 150
  },
  buttonContainer: {
     marginTop: 200,
     flexDirection: 'row',
     justifyContent: 'center'
  }
});

module.exports = VideoPlayer;
