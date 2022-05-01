import firebase from './firebase';
import React from 'react';
import { getDatabase,ref,push,set,onValue, remove,update } from "firebase/database";


export const AddInfo = (obj) => {
    const db = getDatabase();
    const infoRef = ref(db, 'products');
    const newInfoRef = push(infoRef);
    set((newInfoRef),{
        email:obj.email,
        baskets:obj.baskets,
        myArrays:obj.myArrays,
        counts:obj.counts
    })
}

//custom hooklarda fonksiyon adının başına mutlaka use konması gerekir
//useFetch bize databasedeki verileri getiriyor 
export const useFetch = ()=>{
    const [isLoading,setIsLoading] = React.useState();
    const [basketList,setBasketList] =React.useState()
    React.useEffect(()=>{
        setIsLoading(true);
        const db = getDatabase();
        const infoRef = ref(db,"products");
        onValue(infoRef,(snapshot)=>{
            const data = snapshot.val();
            const basketArr = [];
            for(let id in data){
                basketArr.push({
                    id,
                    ...data[id]
                })
            }
            setBasketList(basketArr);
            // console.log(data);
            console.log(basketArr);
            setIsLoading(false);
        })

    },[])
    return {isLoading,basketList}
}

export const DeleteInfo = (id)=>{
    const db= getDatabase();
    remove(ref(db,"/products/"+id));
}

export const UpdateBlog = (info)=>{
    const db= getDatabase();
    const updates = {}
    updates['/products/'+info.id]=info;

    return update(ref(db), updates);
}
