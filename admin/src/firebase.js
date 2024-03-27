// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCC_QqHSU2iBr59QY5_SKJym2pTzcl5Zhk",
	authDomain: "e-shop-8feb8.firebaseapp.com",
	projectId: "e-shop-8feb8",
	storageBucket: "e-shop-8feb8.appspot.com",
	messagingSenderId: "378222947931",
	appId: "1:378222947931:web:0e0bf299271cb4d3e1997e",
	measurementId: "G-2QGPBC7YRS"
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage()
