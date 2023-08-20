import { db } from "./firebaseInit";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

// Refactoring the fetching functions
const vansCollectionRef = collection(db, "vans");

export const VanService = {
  async getVans() {
    const querySnapshot = await getDocs(vansCollectionRef);
    const dataArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(dataArr);
    return dataArr;
  },

  async getVanById(id) {
    const docRef = doc(db, "vans", id);
    const vanSnapshot = await getDoc(docRef);
    console.log({ ...vanSnapshot.data(), id: vanSnapshot.id });
    return { ...vanSnapshot.data(), id: vanSnapshot.id };
  },

  async getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"));
    const querySnapshot = await getDocs(q);
    const dataArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(dataArr);
    return dataArr;
  },
};

// const api = axios.create({
//   baseURL: "/api/vans",
// });

// export const VanService = {
//   async getVans() {
//     const response = await api.get();
//     return response.data.vans;
//   },
//   async getVanById(id) {
//     const response = await api.get(`/${id}`);
//     return response;
//   },
// };
