import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {signout,clearErrMsg} = useContext(AuthContext); 
    return(
        <View>
            <Text style={styles.titleText} >Account Screens</Text>
            <View style={styles.box}><Button  title='Sign Out' onPress={signout} ></Button></View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText:{
        margin:100,
        fontSize:25,
    },
    box:{
        margin:15,
    }
});

export default AccountScreen;