import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const TrackCreateScreen = () => {
    return(
        <View>
            <Text style={styles.titleText} > Track Create Screens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:25,
    }
});

export default TrackCreateScreen;