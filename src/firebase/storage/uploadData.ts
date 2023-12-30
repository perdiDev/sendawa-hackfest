import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebase_app from "../config";
import { v4 } from "uuid";

const storage = getStorage(firebase_app);

export default async function uploadFile(reference: string, data: any) {
  const storageRef = ref(storage, reference);
  const fileRef = ref(storageRef, data.name + v4());

  const result = await uploadBytes(fileRef, data);

  const url = await getDownloadURL(fileRef)
  
  return {result, url};
}
