import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
export default async function getDataRealtime(reference: string) {
  try {
    const snapshot = await get(child(dbRef, reference));
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val()
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
}
