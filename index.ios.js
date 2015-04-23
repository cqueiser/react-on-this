/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var VideoPlayer = require('./VideoPlayer');
var YourVideoList = require('./YourVideoList');
var TopVideoList = require('./TopVideoList');
var {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    } = React;

var ReactOnThis = React.createClass({
    statics: {
        title: '<TabBarIOS>',
        description: 'Tab-based navigation.'
    },

    getInitialState: function () {
        return {
            selectedTab: 'searchVideoTab',
        };
    },

    _renderVideoPlayer: function () {
        return (
            <VideoPlayer />
        );
    },

    _renderYourVideoList: function() {
        return (
            <YourVideoList />
        )
    },

    _renderTopVideoList: function() {
        return (
            <TopVideoList />
        )
    },

    render: function () {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    systemIcon="featured"
                    title="Explore"
                    accessibilityLabel="Explore"
                    selected={this.state.selectedTab === 'searchVideoTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'searchVideoTab',
                        });
                        }}
                >
                    {this._renderVideoPlayer()}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="top-rated"
                    title="Your Videos"
                    accessibilityLabel="Your Videos"
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'yourVideoTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'yourVideoTab',
                        });
                        }}
                >
                    {this._renderYourVideoList()}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="favorites"
                    title="Top Videos"
                    accessibilityLabel="Top Videos"
                    selected={this.state.selectedTab === 'topListTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'topListTab',
                        });
                    }}
                >
                    {this._renderTopVideoList()}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

AppRegistry.registerComponent('ReactOnThis', () => ReactOnThis);
