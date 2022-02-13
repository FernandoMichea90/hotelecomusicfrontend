
import { getAuth, signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { useRef } from 'react';
import { auth, db} from './config'
import {doc,getDoc} from 'firebase/firestore'


const provider=new GoogleAuthProvider()

export function LoginGmail () {
   const query = signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        return Promise.resolve (user)
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return Promise.resolve ("ups ha occuriod un problema")
    });

    return query
}

export const solicitarPermisosUsuarios=async(user)=>{
    console.log(user)
    const docRef=doc(db,'Usuarios',user.email)
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        console.log('Document Data',docSnap.data())
    }else{
        console.log('No such Document')
    }
    return user


}


