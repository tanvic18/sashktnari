// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnHEgYaTViWdtlig7I2cNiy3Ad0AAVVH0",
    authDomain: "the-sashakt-nari.firebaseapp.com",
    projectId: "the-sashakt-nari",
    storageBucket: "the-sashakt-nari.firebasestorage.app",
    messagingSenderId: "629158844808",
    appId: "1:629158844808:web:ef0cd39d0e758efffbc23d",
    measurementId: "G-GCFEHQLB05",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Exporting Firebase Auth instance

// Optional: Initialize Analytics only if measurementId is provided
if (firebaseConfig.measurementId) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized:", analytics);
}

// Export the Firebase app instance (optional, for other services like Firestore or Storage)
export default app;
