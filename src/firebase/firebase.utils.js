import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAF076lwgexg6O27TgWHeVqsJWRb_TsXRU',
  authDomain: 'fact-checker-e4d9e.firebaseapp.com',
  databaseURL: 'https://fact-checker-e4d9e.firebaseio.com',
  projectId: 'fact-checker-e4d9e',
  storageBucket: 'fact-checker-e4d9e.appspot.com',
  messagingSenderId: '88751388689',
  appId: '1:88751388689:web:3b2a1198d762afbe2fd9b0',
  measurementId: 'G-VV9PRWVHWH',
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
// export const auth = firebase.auth()

// const provider = new firebase.auth.FacebookAuthProvider()
// provider.setCustomParameters({ prompt: 'select_account' })
// export const signInWithFacebook = () => auth.signInWithPopup(provider)

export default firebase
