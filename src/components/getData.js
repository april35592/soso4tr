import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@commons/firebase";

const getData = async (dbName) => {
  const ref = query(collection(db, dbName), orderBy("timestamp", "asc"));
  const snap = await getDocs(ref);
  const data = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return data;
};

export default getData;
