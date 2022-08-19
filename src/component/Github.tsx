import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export const githubAuth = async (callback: ()=> void)=>{

    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("e")
        console.log(result)

      }).catch((error) => {
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
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
}
