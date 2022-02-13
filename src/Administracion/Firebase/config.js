import { initializeApp } from "@firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"


const firebaseconfig={
          apiKey: "AIzaSyAZAoPyXnyDHOVAwLmGi6JurN3kNix1_h8",
        authDomain: "hotelecomusic.firebaseapp.com",
        projectId: "hotelecomusic",
        storageBucket: "hotelecomusic.appspot.com",
        messagingSenderId: "138355931232",
        appId: "1:138355931232:web:eca53b409a530b55612b05",
        measurementId: "G-TLVYWRB1SG"
    
}
const app =initializeApp(firebaseconfig)
export const db=getFirestore(app)
export const storage = getStorage(app);
export const  auth = getAuth(app)

