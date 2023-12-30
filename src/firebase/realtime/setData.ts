import { getDatabase, ref, set } from "firebase/database";

export default function setDataRealtime(
  reference: string,
  userId: string,
  data: any
) {
  const db = getDatabase();
  set(ref(db, `${reference}/${userId}`), data);
}
