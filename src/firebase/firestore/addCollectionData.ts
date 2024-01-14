import firebase_app from "../config";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";

// Get the Firestore instance
const db = getFirestore(firebase_app);

// Function to add data to a Firestore collection
export default async function addCollectionMenu(
  collection_ref: string,
  id: string,
  subCollection:string,
  data: any
) {
  let result = null;
  let error = null;

  try {
    const docRef = doc(db, collection_ref,id); //add menu
    const collectionData = collection(docRef, subCollection) //menu/makanan
    result = await addDoc(collectionData,data)

    // Set the document with the provided data in the specified collection and ID
    // result = await setDoc(doc(db, collection, id), data, {
    //   merge: true, // Merge the new data with existing document data
    // });
  } catch (e) {
    // Catch and store any error that occurs during the operation
    error = e;
  }

  // Return the result and error as an object
  return { result, error };
}

// const docRef = doc(db, collection_ref, id);
//   let result = null;
//   let error = null;

//   try {
//     const collectionVal = collection(docRef,category)
//     const getValue = await getDocs(collectionVal)

//     result = getValue.docs.map(doc => ({...doc.data(), id:doc.id}))
//   } catch (e) {
//     error = e;
//   }
