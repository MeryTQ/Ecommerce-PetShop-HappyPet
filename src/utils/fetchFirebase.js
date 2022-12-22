import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore'; 
import { db } from '../utils/firebaseConfig';

export const fetchFirebase = async(categoryId) => {
    let q;
    if(categoryId) {
        q = query(collection(db, "Products"), where("category", "==", String(categoryId)));
    } else {
        q = query(collection(db, "Products"));
    }

    const querySnapshot = await getDocs(q);
    const dataFirebase = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    return dataFirebase;
}

export const fetchFirebaseItem = async(itemId) => {
    const docRef = doc(db, "Products", itemId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: itemId,
        ...docSnap.data()
      }
    } else {
      console.log("No such document!");
    }
}