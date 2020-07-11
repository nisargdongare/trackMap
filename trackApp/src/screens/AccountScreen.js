import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const AccountScreen = () => {
    return(
        <View>
            <Text style={styles.titleText} >Account Screens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:25,
    }
});

export default AccountScreen;