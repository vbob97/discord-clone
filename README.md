# My Discord in React with redux

## If you want try:
for install all the dependences
    npm install

create a file called "firebase.js" with your config and this line of code:

        import { initializeApp } from 'firebase/app';
        import { getFirestore } from 'firebase/firestore/lite';
        import { getAuth,GoogleAuthProvider} from 'firebase/auth';
        const firebaseConfig = {...}
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        export { auth, provider };
        export default db;
    
for run the app

    npm start
