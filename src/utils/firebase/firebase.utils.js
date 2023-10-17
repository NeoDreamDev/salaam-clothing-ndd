import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCbF8hr0yRTJEeaw9UAcUmZdws2pqvUfG4',
  authDomain: 'salaam-clothing-954df.firebaseapp.com',
  projectId: 'salaam-clothing-954df',
  storageBucket: 'salaam-clothing-954df.appspot.com',
  messagingSenderId: '535924292439',
  appId: '1:535924292439:web:8fff150d063a936d31dc12',
  measurementId: 'G-78Z2GNVG41',
};

// Initialize Firebase

const App = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
// this points to the database in the console

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data doesnt exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // if user data exists all of this ^^ will be skipped

  return userDocRef;
};
