import React from 'react';
import { Text, StyleSheet} from 'react-native';2
import MapView,{Polyline} from 'react-native-maps';

const Map = () => {

    let points = [];

    return(
        <MapView 
            initialRegion = {{
                latitude: 37.33233,
                longitude: -122.03121,
                latitudeDelta:0.01,
                longitudeDelta:0.01
            }}
            style={styles.map}
        >
            <Polyline/>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map:{
        height:300
    }
});

export default Map;