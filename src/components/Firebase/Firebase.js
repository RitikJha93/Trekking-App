import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
const firebaseConfig = {
  apiKey:   "AIzaSyBR_EdFtZHPJIkZAI5nNScTUsI34qlWScM",
  authDomain: `trekking-app-349516.firebaseapp.com`,  
  projectId: `trekking-app-349516`,
  storageBucket: `trekking-app-349516.appspot.com`,  
  messagingSenderId: `304963866066`,
  appId:`1:304963866066:web:8449ac8bda96d44ef88c0b`
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


const provider = new GoogleAuthProvider()

export const signIn = ()=>{
    // const navigate = useNavigate()
    
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result);
        const name = result.user.displayName
        const email = result.user.email
        const photo = result.user.photoURL
        const token = result.user.accessToken
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('photo',photo)
        localStorage.setItem('token',token)

        
        console.log(localStorage.getItem('photo'))
    }).catch((error)=>{
        console.log(error);
    })
}