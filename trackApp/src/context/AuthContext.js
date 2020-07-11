import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state,action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async({email,password}) => {
        //make req to signup
        try {
            const response = await trackerApi.post('/signup',{email,password});
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
            dispatch({ type:'add_error' , payload:'Something went wrong with the Signup'});
            
        }
        // if successful = modify state , say we r authorised
        // if fails = reflect error message
    };
};

// const signin = (dispatch) => {
//     return({email,password}) => {
//         //make req to signup
//         // if successful = modify state , say we r authorised
//         // if fails = reflect error message
//     }
// }

// const signout = (dispatch) => {
//     return() => {
        
//     }
// }


export const {Context,Provider} = createDataContext(
    authReducer,
    { signup},
    { isSignedIn : false, errorMessage: '' }
);