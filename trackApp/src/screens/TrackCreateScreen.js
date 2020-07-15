import React, {useEffect, useState} from 'react';
import {StyleSheet}from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { requestPermissionsAsync} from 'expo-location';

const TrackCreateScreen = () => {

    const [err,setErr] =useState('');
    const startWatching = async () => {
        try      { await requestPermissionsAsync(); } 
        catch(e) { setErr(e); }
    }

    useEffect(()=>{ startWatching();},[]);

    return(
        <SafeAreaView forceInset={{top: 'always'}} >
            <Text h2 > Track Create Screens</Text>
            <Map/>
            { err ? <Text>Please Enable location Services</Text>: null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleText:{
        marginTop:30,
        fontSize:25,
    },
    box:{
        margin:15,
    }
});

export default TrackCreateScreen;