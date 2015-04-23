/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var VideoPlayer = require('./VideoPlayer');
var YourVideoList = require('./YourVideoList');
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

    _renderContent: function (color:string, pageText:string) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{this.state.presses} re-renders of the More tab</Text>
            </View>
        );
    },

    render: function () {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    systemIcon="search"
                    title="Explore"
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
                    systemIcon="most-viewed"
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
                    selected={this.state.selectedTab === 'topListTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'topListTab',
                        });
                    }}
                >
                    {this._renderContent('#21551C', 'Green Tab')}
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