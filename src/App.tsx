//import * as React from 'react';
//import { Root, Tabs, LoginRoot } from './config/router';
// import { Platform, StyleSheet, View } from 'react-native';
// import { observer, inject } from 'mobx-react/native';
// import UiStore from './stores/UiStore';
// import { Constants } from './config/constants';
// import { Client } from './api/client'
// import Welcome from './screens/Welcome';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Navigation } from 'react-native-navigation';
// import Provider from './stores/MobxRnnProvider';
// import Store from './stores';
// import { registerScreens } from './navigation/index';
// import { reaction } from 'mobx';

//icons
//var homeIcon: Promise<any>, iosHomeOutline: Promise<any>, iosPerson: Promise<any>, iosPersonOutline: Promise<any>;

export default class App {

  // constructor() {
  //   this.populateIcons().then(() => {
  //     // Start app only if all icons are loaded
  //     this.startApp();
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }

  // private populateIcons(): Promise<any> {
  //   return new Promise(function (resolve, reject) {
  //     Promise.all(
  //       [
  //         Icon.getImageSource('ios-home', 30),
  //         Icon.getImageSource('ios-home-outline', 30),
  //         Icon.getImageSource('ios-person', 30),
  //         Icon.getImageSource('ios-person-outline', 30),
  //       ]
  //     ).then((values) => {
  //       homeIcon = values[0];
  //       iosHomeOutline = values[1];
  //       iosPerson = values[2];
  //       iosPersonOutline = values[3];
  //       resolve(true);
  //     }).catch((error) => {
  //       console.log(error);
  //       reject(error);
  //     });
  //   });
  // }

  // private startApp() {
  //   registerScreens(Store, Provider);
  //   console.log(`Is authenticated : ${Store.authStore.isAuthenticated}`)
  //   reaction(() => Store.authStore.isAuthenticated, () => this.drawApp(Store.authStore.isAuthenticated));
  //   this.drawApp(Store.authStore.isAuthenticated);
  // }

//   private drawApp(login: boolean) {
//     console.log(`Is authenticated : ${login}`)

//     if (login) {

//       Navigation.startTabBasedApp({
//         tabs: [
//           {
//             label: 'HomeScreen',
//             screen: 'HomeScreen', // this is a registered name for a screen
//             icon: homeIcon,
//             selectedIcon: iosHomeOutline, // iOS only
//             title: 'Screen One'
//           },
//           {
//             label: 'ProfileScreen',
//             screen: 'ProfileScreen', // this is a registered name for a screen
//             icon: iosPerson,
//             selectedIcon: iosPersonOutline, // iOS only
//             title: 'Screen One'
//           }
//         ]
//       });
//     } else {
//       Navigation.startSingleScreenApp({
//         screen: {
//           screen: 'Login',
//           title: 'Login',
//           navigatorStyle: {}
//         },
//       });
//     }
//   }
 }

/* class Content extends React.Component<AppProperties> {

  componentWillReceiveProps(props: AppProperties) {
    console.log(props);
    let isAuthenticated: boolean = this.props.mainStore.authStore.isAuthenticated;
    if (isAuthenticated) {
      console.log(`user is logged : ${isAuthenticated}`);
    }
  }

  componentDidMount() {

  }

  render() {
    let isAuthenticated = this.props.mainStore.authStore.isAuthenticated;
    console.log(`render App with isAuthenticated ${isAuthenticated}`);
    return (<View><label>Hello world...</label></View>);
    //return isAuthenticated ? <Root /> : <LoginRoot />
  }
} */
