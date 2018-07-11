import { firebaseDB } from '../firebase/firebase';

export const ADD_ITEM = 'ADD_ITEM';


export function AddNiftAction(id, newItem) {
  const UidKey = firebaseDB.ref(`nifties/${id}`).push().getKey();
  firebaseDB.ref(`nifties/${id}/${UidKey}`).set({
    ...newItem,
  });

  return ({
    type: ADD_ITEM,
    newItem,
  });
}
