import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'
import { firestorePlugin } from 'vuefire'

if (!firebase.apps.length) {
  Vue.prototype.$firebase = firebase.initializeApp({
    apiKey: 'AIzaSyBy3YKIbLQukuAr-c3HlX4ooN-H0MsAfno',
    authDomain: 'process-ui.firebaseapp.com',
    databaseURL: 'https://process-ui.firebaseio.com',
    projectId: 'process-ui',
    storageBucket: 'process-ui.appspot.com',
    messagingSenderId: '242838500227',
    appId: '1:242838500227:web:1aea515085207e033cfcb6',
    measurementId: 'G-JS8VLXLEX6'
  })

  Vue.prototype.$db = firebase.firestore()
  Vue.prototype.$auth = firebase.auth()
  Vue.prototype.$analytics = firebase.analytics()
}

Vue.use(firestorePlugin)
