import React,{useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/authForm';


const SigninScreen = ({navigation}) => {
    const {state,signin,clearErrMsg} = useContext(AuthContext); 
    return(
        <>
            
            <AuthForm
            headerText="Login Screens"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            buttonText="Sign in"
            linkNav={()=>{navigation.navigate('Signup')}}
            linkText="Don't have an account? Create instead."
            clrErrMsg={clearErrMsg}
            />
        </>
    );
}

SigninScreen.navigationOptions = ()=> { return{headerShown:false}};
export default SigninScreen;  