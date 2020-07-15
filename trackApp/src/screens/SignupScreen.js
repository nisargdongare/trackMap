import React,{useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/authForm';

const SignupScreen = ({navigation}) => {
    const {state,signup,clearErrMsg} = useContext(AuthContext); 


    return(
        <AuthForm
        headerText="Signup Screens"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText="Sign UP"
        linkNav={()=>{navigation.navigate('Signin')}}
        linkText="Already have an account? Sign in instead."
        clrErrMsg={clearErrMsg}
        />
    );
}

SignupScreen.navigationOptions = ()=> { return{headerShown:false}};
export default SignupScreen;  