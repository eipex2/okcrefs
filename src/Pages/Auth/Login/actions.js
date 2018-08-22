import { auth } from '../../../Firebase';

export const loginUser = (email, password) => 
    auth.doSignInWithEmailAndPassword(email, password)

// export const login = fields => dispatch => {
//     auth.doSignInWithEmailAndPassword(fields.username, fields.password)
//       .then(authUser => {
//         //this.setState(() => ({ ...INITIAL_STATE }));
//         //router.history.push('/dashboard');
//         window.location = '/dashboard';
//       })
//       .catch(error => {
//         this.setState(updateByPropertyName('error', error));
//       });
  
    
//   }

