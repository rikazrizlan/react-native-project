import {auth, db} from '../../config/firebase';
import { USER_STATE_CHANGED } from '../constants';

export function fetchUser() {
    return((dispatch) => {
        db.collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                console.log(snapshot.data());
                dispatch({
                    type: USER_STATE_CHANGED,
                    currentUser: snapshot.data()
                })
            } else {
                console.log('does not exist')
            }
        })
    })
}