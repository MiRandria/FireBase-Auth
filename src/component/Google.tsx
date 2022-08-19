/* eslint-disable @typescript-eslint/no-unused-vars */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

 export  const googleAuth = async (callback: ()=> void) => {
    const auth = getAuth();
const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    callback()
  }).catch((error) => {
    console.log(error)
    // Handle Errors here.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorCode = error.code;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorMessage = error.message;
    // The email of the user's account used.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }