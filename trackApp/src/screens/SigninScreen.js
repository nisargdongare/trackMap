import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const SigninScreen = () => {
    return(
        <View>
            <Text style={styles.titleText} >Signin Screens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:25,
    }
});

export default SigninScreen;