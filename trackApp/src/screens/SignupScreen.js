import React,{useState, useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
    const {state,signup} = useContext(AuthContext); 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.spacer} h3>Signup Screens</Text>
            <View style={styles.spacer}> 
                <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
                <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" autoCorrect={false}/>
                {state.errorMessage? <Text style={styles.errMsg} >{state.errorMessage}</Text>:null}
                <Button title ="Sign UP" onPress={()=> signup({email,password})}/>
            </View>
        </View>
    );
}

SignupScreen.navigationOptions = ()=> { return{headerShown:false}};

const styles = StyleSheet.create({
    spacer:{
        margin:20,
    },
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:200  
    },
    errMsg:{
        color:'red',
        fontSize:15
    }
});

export default SignupScreen;  