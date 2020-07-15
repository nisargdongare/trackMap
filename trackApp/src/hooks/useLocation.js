import '../_mockLocation';
import { useState,useEffect } from 'react';
import {Accuracy,requestPermissionsAsync,watchPositionAsync} from 'expo-location';
// sould trac = isfocued
export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    

    useEffect(() => {

        let subscriber;

        const startWatching = async () => {
            try { 
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval:10
                    }, callback
                );
                setSubscriber(sub);
            }
            catch (e) {
                setErr(e);
            }
        }


        if(shouldTrack){ 
            startWatching();
        }
        else {
            if(subscriber){subscriber.remove();}
            setSubscriber= null;
        } 
        return ()=>{
             if(subscriber){subscriber.remove();}
            
        }
    }, [shouldTrack, callback]);

    return [err];

};