// import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
// import Launch from './components/Launch'
// import Register from './components/Register'
// import Login from './components/Login'
// import Login2 from './components/Login2'

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
// import Error from './components/Error'
// import Home from './components/Home'
// import TabView from './components/TabView'
import Launcher from './Launcher'
import SignUp from './SignupComp'
import SignIn from './SigninComp'

const Realm = require('realm');
const realm = new Realm({
    schema: [{name: 'Dog', properties: {name: 'string'}}]
});


class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class HelloPage extends React.Component {
    render() {
        return <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar={true}>
                    <Scene key="launcher"  component={Launcher}  title="Добро пожаловать!" initial />
                    <Scene key="signin"  component={SignIn}  title="Логин" />
                    <Scene key="signup" component={SignUp} title="Регистрация" duration={1}/>
                </Scene>

            </Scene>
        </Router>;
    }
}