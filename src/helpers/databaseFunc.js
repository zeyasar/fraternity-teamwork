import firebase from './firebase';
import { getDatabase,ref,push,set,onValue, remove,update } from "firebase/database";


export const AddInfo = (obj) => {
    const db = getDatabase();
    const infoRef = ref(db, 'products');
    const newInfoRef = push(infoRef);
    set((newInfoRef),{
        user:obj.email,
        basket:obj.basket,
        myArray:obj.myArray,
        count:obj.count
    })
}
