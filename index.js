import 'react-native-gesture-handler'
import React from 'react'
import {registerRootComponent} from 'expo'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './src/store/configureStore'

const store = configureStore();

const RNRedux =() =>  (
    <Provider  store={store}> 
        <App />
    </Provider>

)

registerRootComponent(RNRedux)