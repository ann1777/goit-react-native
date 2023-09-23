import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'goit-react-native-593d9.firebaseapp.com',
  databaseURL: '<https://goit-react-native-593d9.firebaseio.com>',
  projectId: 'goit-react-native-593d9',
  storageBucket: 'goit-react-native-593d9.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
