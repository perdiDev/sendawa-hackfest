import firebase_app from "../config";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getMenuCollection(
  collection_ref: string,
  id: string
) {

  const docRef = doc(db, collection_ref, id);
  let result = null;
  let error = null;

  try {
    const collectionVal = collection(docRef,'makanan')
    const getValue = await getDocs(collectionVal)

    result = getValue.docs.map(doc => ({...doc.data(), id:doc.id}))
  } catch (e) {
    error = e;
  }


  return { result, error };
}
