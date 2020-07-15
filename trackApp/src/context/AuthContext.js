import { AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state,action) => {
    switch(action.type) {
        case 'signout':
            return {token: null,errorMessage: ''}
        case 'clr_err_msg':
            return {...state, errorMessage: ''};
        case 'signinup':
            return {errorMessage:'', token: action.payload};
        case 'add_error':
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signinup', payload: token});
        navigate('TrackList');
    }else{
        navigate('Signup');  
    }
}

const clearErrMsg = dispatch=>() => {
    dispatch({type: 'clr_err_msg'});
}

const signup = (dispatch) => {
    return async({email,password}) => {
        //make req to signup
        try {
            const response = await trackerApi.post('/signup',{email,password});
            // if successful = modify state , say we r authorised
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({typpe:'signinup', payload: response.data.token});
            navigate('TrackList');
        } catch (err) {
            // if fails = reflect error message
            console.log(err.response.data);
            dispatch({ type:'add_error' , payload:'Something went wrong with the Signup'});
        }
    };
};

const signin = (dispatch) => {
    return async({email,password}) => {
        //make req to signup
        try {
            const response = await trackerApi.post('/signin',{email,password});
            // if successful = modify state , say we r authorised
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({typpe:'signinup', payload: response.data.token});
            navigate('TrackList');
        } catch (err) {
            // if fails = reflect error message
            console.log(err.response.data);
            dispatch({ type:'add_error' , payload:'Something went wrong with the Signin'});
        }
    };
};

const signout = dispatch=> async() => {
        await AsyncStorage.removeItem('token')
        dispatch({type:'signout'});
        navigate('Signin');  
}


export const {Context,Provider} = createDataContext(
    authReducer,
    { signup,signin,signout,clearErrMsg,tryLocalSignin},
    { token: null, errorMessage: '' }
);