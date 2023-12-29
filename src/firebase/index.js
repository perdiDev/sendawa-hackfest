import { getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";

export const auth = getAuth(firebase_app)