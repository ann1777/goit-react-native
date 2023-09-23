import {
  createUserWithEmailAndPassword as createUser,
  getAuth,
  onAuthStateChanged as onAuthState,
  signInWithEmailAndPassword as signIn,
  updateProfile as update,
} from 'firebase/auth';

const auth = getAuth();

async function createUserWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUser(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

async function signInWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signIn(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

function onAuthStateChanged(callback) {
  return onAuthState(auth, callback);
}

async function updateProfile(user, displayName, photoURL) {
  try {
    await update(user, {displayName, photoURL});
  } catch (error) {
    throw error;
  }
}

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
};
