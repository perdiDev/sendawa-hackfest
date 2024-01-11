import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDocumentFirestore(
  collection: string,
  id: string
) {

  const docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap)
      result = docSnap.data();
    }
  } catch (e) {
    error = e;
  }


  return { result, error };
}
