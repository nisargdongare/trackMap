import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const TrackDetailScreen = () => {
    return(
        <View>
            <Text style={styles.titleText} > Track Detail Screens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:25,
    }
});

export default TrackDetailScreen;