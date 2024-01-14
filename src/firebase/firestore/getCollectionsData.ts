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
    const collectionMakanan = collection(docRef,'makanan')
    const collectionMinuman = collection(docRef,'minuman')
    const collectionDessert = collection(docRef,'dessert')
    const getValue_makanan = await getDocs(collectionMakanan)
    const getValue_minuman = await getDocs(collectionMinuman)
    const getValue_dessert = await getDocs(collectionDessert)

    const makanan = getValue_makanan.docs.map(doc => ({...doc.data(), id:doc.id}))
    const minuman = getValue_minuman.docs.map(doc => ({...doc.data(), id:doc.id}))
    const dessert = getValue_dessert.docs.map(doc => ({...doc.data(), id:doc.id}))

    result = {makanan, minuman, dessert}
  } catch (e) {
    error = e;
  }


  return { result, error };
}
