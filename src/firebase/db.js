import { doc, getDocs, getFirestore, collection, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);

export const getProducts = async () => {
    const products = await getDocs(collection(db, "products"))
    return products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    }
}
export const getCateory= async () => {
    const products = await getDocs(collection(db, "categorys"))
    return products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
export const getProductsByCategory= async (category) => {
    const products = await getDocs(collection(db, "products"))
    const allProducts = products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return allProducts.filter((prod) => prod.category === category);
}
export const createOrder = async (order) => {
    const ordersCollection = collection(db, "orders");
    const orderDoc = await addDoc(ordersCollection, order);
    return orderDoc.id;
}