import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCBdCj9XPfFFLOgmwLIxRaqX_8SFqVbeRk',
  authDomain: 'clothing-db-a0a6e.firebaseapp.com',
  databaseURL: 'https://clothing-db-a0a6e.firebaseio.com',
  projectId: 'clothing-db-a0a6e',
  storageBucket: 'clothing-db-a0a6e.appspot.com',
  messagingSenderId: '250315752320',
  appId: '1:250315752320:web:a9dbeba50d2d9a1babf765',
  measurementId: 'G-ZP88KK2FYG',
};

/**if user not in firestore then create, data include displayName and email
 * 描述
 * @date 2020-07-31
 * @param {any} userAuth
 * @param {any} additionalData
 * @returns {any} the user reference of firestore
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error createing user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
