import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const TrackListScreen = () => {
    return(
        <View>
            <Text style={styles.titleText} > Track List Screens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:25,
    }
});

export default TrackListScreen;