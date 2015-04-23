/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Video = require('react-native-video');
var MOCKED_VIDEO_DATA = [
  {title: 'Title', uri:  "http://is.myvideo.de/movie23/95/11584253.mp4"},
];

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var ReactOnThis = React.createClass({
  render: function() {
    var video = MOCKED_VIDEO_DATA[0];
    return (
      <View style={styles.container}>

        <Video source={{uri: video.uri}} // Can be a URL or a local file.
               rate={1.0}                   // 0 is paused, 1 is normal.
               volume={1.0}                 // 0 is muted, 1 is normal.
               muted={false}                // Mutes the audio entirely.
               paused={false}               // Pauses playback entirely.
               resizeMode="cover"           // Fill the whole screen at aspect ratio.
               repeat={false}                // Repeat forever.
               onLoad={this.setDuration}    // Callback when video loads
               onProgress={this.setTime}    // Callback every ~250ms with currentTime
               onEnd={this.onEnd}           // Callback when playback finishes
               style={styles.backgroundVideo} />
          <TouchableHighlight onPress={this._onPressButton} style="{styles.button}">
            <Text>Hit</Text>
          </TouchableHighlight>
        <Text style={styles.welcome}>
          {video.title}
        </Text>

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
    position: ""
    fontSize: 14,
    margin: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactOnThis', () => ReactOnThis);
