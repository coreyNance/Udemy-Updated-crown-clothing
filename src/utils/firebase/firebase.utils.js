import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { 
    getFirestore,
    doc, 
    getDoc, 
    setDoc,
    collection,  // this is the function that will be used to create a new document in the "users" collection with the user's UID as the document ID and the user's display name, email, and created at date as the document data.
    writeBatch,  // this is the function that will be used to create a new document in the "users" collection with the user's UID as the document ID and the user's display name, email, and created at date as the document data.
    query,  // this is the function that will be used to create a new document in the "users" collection with the user's UID as the document ID and the user's display name, email, and created at date as the document data.
    getDocs  // this is the function that will be used to create a new document in the "users" collection with the user's UID as the document ID and the user's display name, email, and created at date as the document data.
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrquaKQtP_BX1pgXa0CIwx4_yMgCREalE",
  authDomain: "updated-crwn-clothing-db.firebaseapp.com",
  projectId: "updated-crwn-clothing-db",
  storageBucket: "updated-crwn-clothing-db.firebasestorage.app",
  messagingSenderId: "2956291489",
  appId: "1:2956291489:web:c1a4a99ea553da52a5efe0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const googleProvider = new GoogleAuthProvider(); // this is a class that we can use to create a new instance of the Google provider object that we can use to authenticate users with Google.

// Always prompt the user to select an account
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// this is the code that will be used to initialize the Firebase Authentication service and get a 
// reference to it, and then create a new instance of the Google provider object that we can use to authenticate 
// users with Google, and then set the custom parameters for the provider to always prompt the user to select an account when signing in with Google.
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// this is the function that will be used to sign in with Google using a redirect
export const db = getFirestore();


// this is the function that will be used to add a collection and documents to Firestore. It takes in a collection key and an array of objects 
// to add to the collection. It creates a new document for each object in the array, using the object's title as the document ID, and sets 
// the document data to the object. It then commits the batch write to Firestore.
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
};


// this is the function that will be used to get the categories and documents from Firestore. It queries the "categories" 
// collection and returns an object where the keys are the category titles and the values are the category items.
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;

}

// this is the function that will be used to create a new user document in Firestore. It takes in a userAuth object and an optional additionalInformation object. 
// It checks if the user document already exists, and if not, it creates a new document with the user's display name, email, and created at date, along with any additional information provided.
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

    if (!userAuth) return;
    
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    // if the user data does not exist, create/set the document with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        
        // this is the code that will be used to create a new document in the "users" collection with the user's UID as the document ID and the user's display name, email, and created at date as the document data.
        const {displayName, email} = userAuth;
        // this is the code that will be used to create a new document in the "users" collection with the user's UID as the document ID and the user's display name, email, and created at date as the document data.
        const createdAt = new Date();

        // this is the function that will be used to create a new document in the "users" collection with the user's UID as the document ID and the user's display name, email, and created at date as the document data.
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }            

    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback);
