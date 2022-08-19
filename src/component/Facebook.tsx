import { getAuth, signInWithPopup, FacebookAuthProvider} from "firebase/auth";

export const facebookAuth = async (callback: ()=> void)=>{
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            callback()
  })
  .catch((error) => {
    // Handle Errors here.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorCode = error.code;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorMessage = error.message;
    // The email of the user's account used.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const email = error.customData.email;
    // The AuthCredential type that was used.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}
