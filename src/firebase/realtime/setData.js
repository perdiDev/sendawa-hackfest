import { getDatabase, ref, set } from "firebase/database";

export default function setDataRealtime(reference,userId, data) {
  const db = getDatabase();
  set(ref(db, `${reference}/${userId}`),data);
}

