/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Video = require('react-native-video');
var REQUEST_URL = 'http://localhost:8080/api/v1/myvideos/xyz';
var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    ListView,
    View,
    TouchableHighlight
    } = React;

var YourVideoList = React.createClass({
    onLoad: function () {
        console.log('loaded');
    },
    fetchData: function() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true
                });
            console.log(responseData);
            })
            .done();
    },
    componentDidMount: function() {
        this.fetchData();
    },
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
    },
    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        return this.renderVideo(rowData, rowID);
    },
    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                style={styles.listView}
                />
        );
    },
    renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading your videos...
                </Text>
            </View>
        );
    },

    renderVideo: function(video, rowID: number) {
        rowID++;
        return (
            <View style={styles.container}>
                <Text style={styles.indexNumber}>{rowID}</Text>
                <Image
                    source={{uri: video.image}}
                    style={styles.thumbnail}
                    />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{video.clipTitle}</Text>
                    <Text style={styles.formatName}>{video.formatName}</Text>
                </View>
                <View style={styles.separator} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        paddingTop: 10,
        paddingBottom: 10
    },
    thumbnail: {
        width: 77,
        height: 54,
        marginRight: 5
    },
    rightContainer: {
        flex: 1
    },
    indexNumber: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#6E6E6E',
        width: 70,
        paddingRight: 20,
        textAlign: 'right'
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: '#424242'
    },
    formatName: {
        color: '#6E6E6E',
        fontSize: 14
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#D8D8D8'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    }
});

module.exports = YourVideoList;
