// const firebaseConfig = {
//     apiKey: "AIzaSyBX4u_bQaBV11MIWKFSa6i5amNUuZxRdsA",
//     authDomain: "pedalpals-cce3b.firebaseapp.com",
//     projectId: "pedalpals-cce3b",
//     storageBucket: "pedalpals-cce3b.appspot.com",
//     messagingSenderId: "513391929631",
//     appId: "1:513391929631:web:9dd7a8dc3515dfe6c7e82a"
// };

// export default firebaseConfig;

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

};

export default firebaseConfig;