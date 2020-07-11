import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

const SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.spacer} h3>Signup Screens</Text>
            <View style={styles.spacer}> 
                <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
                <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" autoCorrect={false}/>
                <Button title ="Sign UP" onPress={()=>navigation.navigate('Signin')}/>
            </View>
        </View>
    );
}

SignupScreen.navigationOptions = ()=> { return{header:null}};

const styles = StyleSheet.create({
    spacer:{
        margin:20,
    },
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:200  
    }
});

export default SignupScreen;  