import React, {useContext} from 'react';
import { Input,Button} from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
    const { state:{name,recording, locations}, startRecording,stopRecording, changeName} = useContext(LocationContext);
    // console.log(locations.length);
    return(
        <View style={styles.box}>
            <Input 
                value = {name}
                placeholder="Enter Name" 
                onChangeText = {changeName}
            />
            {recording
            ? <Button title="Stop" onPress={stopRecording} />
            : <Button title="Start Recording" onPress={startRecording} />
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        margin: 20
    }
});

export default TrackForm;
