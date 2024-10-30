// database-module.js
import { db } from './firebase-config.js'; 
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const addPerson = async (personData) => {
    try {
        const docRef = await addDoc(collection(db, "personas"), personData);
        console.log("Documento agregado con ID: ", docRef.id);
    } catch (e) {
        console.error("Error al agregar documento: ", e);
    }
};

export { addPerson };
