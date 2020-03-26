import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// const config = {
//   apiKey: 'AIzaSyAF076lwgexg6O27TgWHeVqsJWRb_TsXRU',
//   authDomain: 'fact-checker-e4d9e.firebaseapp.com',
//   databaseURL: 'https://fact-checker-e4d9e.firebaseio.com',
//   projectId: 'fact-checker-e4d9e',
//   storageBucket: 'fact-checker-e4d9e.appspot.com',
//   messagingSenderId: '88751388689',
//   appId: '1:88751388689:web:3b2a1198d762afbe2fd9b0',
//   measurementId: 'G-VV9PRWVHWH',
// }

const config = {
  apiKey: 'AIzaSyAB5_32cMgVv6-hPMEShZtaJFtBfJoFD3g',
  authDomain: 'bd-fact-checker.firebaseapp.com',
  databaseURL: 'https://bd-fact-checker.firebaseio.com',
  projectId: 'bd-fact-checker',
  storageBucket: 'bd-fact-checker.appspot.com',
  messagingSenderId: '369118356436',
  appId: '1:369118356436:web:14d5170e476fd789bf6c41',
  measurementId: 'G-9V0Y2X7TC9',
}

firebase.initializeApp(config)

export const getUrlArticles = urls => {
  return urls.docs.map(url => {
    const { title, body } = url.data()

    return {
      id: url.id,
      title,
      body,
    }
  })
}

export const getUrlArticle = url => {
  return url
}

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const facebookProvider = new firebase.auth.FacebookAuthProvider()
// facebookProvider.addScope('profile_pic', 'email', 'user_birthday')
facebookProvider.setCustomParameters({
  // prompt: 'select_account',
  display: 'popup',
})
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)

export default firebase
