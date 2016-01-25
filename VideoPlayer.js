/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Video = require('react-native-video');

var _apiUrl_pull = "http://localhost:8080/api/v1/videos";
var _apiUrl_push = "http://localhost:8080/api/v1/vote";

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
    } = React;


var DataModule = {

    _client: undefined,
    _dataPool: [],
    _activeData: undefined,
    _pullUrl: _apiUrl_pull,
    _pushUrl: _apiUrl_push,

    bind: function (client) {
        this._client = client;
        this._pull(true);
    },

    getNext: function () {
        this._activeData = this._dataPool[0];
        this._dataPool.shift();

        if (this._dataPool.length <= 5) {
            this._pull(false);
        }

        console.log((this._dataPool.length + 1) + ' items left to play');

        return this._activeData;
    },

    pushData: function (likes) {

        var data = {
            user: "xyz",
            videoId: this._activeData.videoId,
            likes: "" + likes
        };

        this._push(JSON.stringify(data));
    },
    _push: function (data) {

        console.log('try to push');
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                console.log('Data is pushed');
            } else {
                console.warn('error while push data ' + request.error);
            }
        };

        request.setRequestHeader("Content-type", "application/json");
        request.open('POST', this._pushUrl);
        request.send(data);
    },

    _pull: function (isfirstPull) {
        var that = this;

        fetch(that._pullUrl)
            .then((response) => response.json())
            .then((responseData) => {
                console.log('Data is Pulled');

                that._dataPool = that._dataPool.concat(responseData);

                if (isfirstPull) {
                    that._onFirstPull();
                }
            })
            .done();
    },
    _onFirstPull: function () {

        console.log('_onFirstPull');
        this._client.setState({
            index: 0,
            currentTime: 0.0,
            duration: 0.0,
            video: this.getNext()
        });
    }
};

var VideoPlayer = React.createClass({

    dataModule: undefined,

    getInitialState: function () {
        return {}
    },
    onLoad: function (data) {
        this.setState({duration: data.duration});
    },
    onProgress: function (data) {
        this.setState({currentTime: data.currentTime});
    },
    getCurrentTimePercentage: function () {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    },
    componentDidMount: function () {
        if (!this.dataModule) {
            this.dataModule = DataModule;
            this.dataModule.bind(this);
        }
    },
    onEnd: function () {
        console.log('onVideoEnd');
        this.getNextVideo();
    },
    onPressLikeButton: function () {
        console.log('hit');
        this.dataModule.pushData(true);
        this.getNextVideo();
    },
    onPressDislikeButton: function () {
        console.log('shit');
        this.dataModule.pushData(false);
        this.getNextVideo();
    },
    getNextVideo: function () {

        console.log('onGetNextVideo');

        var index = this.state.index;
        index++;

        this.setState({
            index: index,
            currentTime: 0.0,
            duration: 0.0,
            video: this.dataModule.getNext()
        });
    },
    render: function () {

        if (!this.dataModule) {
            return (
                <View style={styles.container}>
                    <Text>
                        Loading movies...
                    </Text>
                </View>
            );
        }

        var video = this.state.video;
        var flexCompleted = this.getCurrentTimePercentage() * 100;
        var flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
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
                       onProgress={this.onProgress}    // Callback every ~250ms with currentTime
                       onEnd={this.onEnd}           // Callback when playback finishes
                       style={styles.backgroundVideo}/>
                <Text style={styles.title}>
                    {video.formatName} - {video.clipTitle}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight onPress={this.onPressLikeButton} style="{styles.button}">
                        <Text style={styles.button}>LIKE</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.onPressDislikeButton} style="{styles.button}">
                        <Text style={styles.button}>DISLIKE</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.trackingControls}>
                    <View style={styles.progress}>
                        <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]}/>
                        <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]}/>
                    </View>
                </View>
            </View>

        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 14,
        color: '#DDDDDD',
        margin: 10,
        backgroundColor: 'transparent'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        marginTop: 10
    },
    innerProgressCompleted: {
        height: 10,
        backgroundColor: '#cccccc'
    },
    innerProgressRemaining: {
        height: 10,
        backgroundColor: '#2C2C2C'
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