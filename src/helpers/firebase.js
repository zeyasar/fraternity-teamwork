// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaI1cHqAgW4yZj2W7R3HhmaG4HvxM3U-Q",
  authDomain: "fraternity-team.firebaseapp.com",
  databaseURL: "https://fraternity-team-default-rtdb.firebaseio.com",
  projectId: "fraternity-team",
  storageBucket: "fraternity-team.appspot.com",
  messagingSenderId: "478603598562",
  appId: "1:478603598562:web:f9421baaf5870cd8935cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async(email,password,displayName,navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth,email,password);
        console.log("userCre",userCredential);
        let user = userCredential.user;
        console.log("user",user);
        await updateProfile(auth.currentUser,{displayName:displayName});
        console.log(user)
        navigate('/');
    } catch (error) {
        alert(error.message);
    }
    }

 export const signIn = async(email,password,navigate) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
        navigate('/');
    } catch (error) {
        alert(error.message);
    }
    }   

export const userObserver = (setCurrentUser)=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {  
            setCurrentUser(user)
            
            
          } else {
            setCurrentUser(false);
          }
        });
}
export const logOut = () => {
        signOut(auth);
};
