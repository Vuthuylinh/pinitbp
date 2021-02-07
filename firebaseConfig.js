import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBNRe5P8fvKVDiwIqMVj5y42zakK5ygaAQ',
  authDomain: 'linh-pinit.firebaseapp.com',
  projectId: 'linh-pinit',
  storageBucket: 'linh-pinit.appspot.com',
  messagingSenderId: '36024152167',
  appId: '1:36024152167:web:dc6d40882a2056c80fe4c2'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase
