import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const addContact = async ({ userId, title, description, status }) => {
  try {
    await addDoc(collection(db, "todo"), {
      user: userId,
      title: title,
      description: description,
      status: status,
      createdAt: new Date().getTime(),
    });
  } catch (err) {}
};
const toggleContactStatus = async ({ docId, status }) => {
  try {
    const todoRef = doc(db, "todo", docId);
    await updateDoc(todoRef, {
      status,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteContact = async (docId) => {
  try {
    const todoRef = doc(db, "todo", docId);
    await deleteDoc(todoRef);
  } catch (err) {
    console.log(err);
  }
};
export { addContact, toggleContactStatus, deleteContact };
