import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDy8lYEmE4Rs9A66Hf5mWc6GujfB9Mo1SY',
  authDomain: 'react-redux-firebise.firebaseapp.com',
  databaseURL: 'https://react-redux-firebise.firebaseio.com',
  projectId: 'react-redux-firebise',
  storageBucket: 'react-redux-firebise.appspot.com',
  messagingSenderId: '799988958832',
};

firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();
export const auth = firebase.auth();
export const firebaseDB = firebase.database();
