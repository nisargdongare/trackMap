import React,{useState} from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import { NavigationEvents } from 'react-navigation'

const AuthForm = ({headerText,errorMessage,onSubmit,buttonText,linkNav,linkText,clrErrMsg}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return(
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clrErrMsg} />
            <Text style={styles.spacer} h3>{headerText}</Text>
            <View style={styles.spacer}> 
                <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
                <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" autoCorrect={false}/>
                {errorMessage? <Text style={styles.errMsg} >{errorMessage}</Text>:null}
                <Button title ={buttonText} onPress={()=> onSubmit({email,password})}/>
                <TouchableOpacity onPress={linkNav}>
                    <Text style={styles.lnk}>{linkText}</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );

};

const styles = StyleSheet.create({
    spacer:{
        margin:20,
    },
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:100  
    },
    errMsg:{
        color:'red',
        fontSize:15
    },
    lnk:{
        marginTop: 20,
        color: 'blue'
    }
});


export default AuthForm;