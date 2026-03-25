import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInAnonymously, 
  onAuthStateChanged, 
  signOut,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  serverTimestamp,
  getDocFromServer
} from 'firebase/firestore';

// Import the Firebase configuration
import firebaseConfig from './firebase-applet-config.json';

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Auth Providers
export const googleProvider = new GoogleAuthProvider();

// Operation types for error handling
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Helper to test connection
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. ");
    }
  }
}

// Auth Helpers
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await syncUserProfile(result.user);
    return result.user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const loginAsGuest = async () => {
  try {
    const result = await signInAnonymously(auth);
    await syncUserProfile(result.user);
    return result.user;
  } catch (error) {
    console.error('Guest login failed:', error);
    throw error;
  }
};

export const logout = () => signOut(auth);

const syncUserProfile = async (user: FirebaseUser) => {
  const userRef = doc(db, 'users', user.uid);
  try {
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email || null,
        displayName: user.displayName || 'Guest',
        photoURL: user.photoURL || null,
        isGuest: user.isAnonymous,
        favorites: [],
        lastLogin: serverTimestamp(),
        createdAt: serverTimestamp()
      });
    } else {
      await updateDoc(userRef, {
        lastLogin: serverTimestamp(),
        displayName: user.displayName || userDoc.data().displayName,
        photoURL: user.photoURL || userDoc.data().photoURL
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
  }
};

// Favorites management
export const saveUserFavorites = async (userId: string, favorites: number[]) => {
  const userRef = doc(db, 'users', userId);
  try {
    await updateDoc(userRef, { favorites });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `users/${userId}`);
  }
};

export const getUserFavorites = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  try {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data().favorites as number[] || [];
    }
    return [];
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `users/${userId}`);
    return [];
  }
};

// Usage Statistics Helpers
export const trackAppOpen = async () => {
  const statRef = doc(db, 'app_usage', 'global');
  try {
    await setDoc(statRef, {
      openCount: increment(1),
      lastOpened: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'app_usage/global');
  }
};

export const trackSongView = async (songId: number) => {
  const statRef = doc(db, 'song_views', songId.toString());
  try {
    await setDoc(statRef, {
      songId,
      viewCount: increment(1),
      lastViewed: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `song_views/${songId}`);
  }
};
