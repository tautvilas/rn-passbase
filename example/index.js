/**
 * @format
 */
import App from './App';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import { TouchableOpacity, Text } from 'react-native';

Navigation.registerComponent(`exampleApp`, () => App);
Navigation.registerComponent(`root`, () => props => {
  return (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center'}}
      onPress={() => {Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: 'exampleApp',
              passProps: {
                text: 'stack with one child'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Modal'
                  }
                }
              }
            }
          }]
        }
      })}}
    ><Text>Press me to push auth screen</Text></TouchableOpacity>
  )
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
    },
    layout: { orientation: ['portrait'] },
    topBar: {
      background: {
        color: 'rgb(103, 57, 255)'
      },
      title: {
        color: 'white',
        fontFamily: 'Roboto-Light',
      },
      leftButtonColor: 'white',
      rightButtonColor: 'white',
      backButton: {
        color: 'white',
      },
    },
  });

  Navigation.setRoot({
    root: {
      component: {
        name: "root"
      }
    }
  });
});

