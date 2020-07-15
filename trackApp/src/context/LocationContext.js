import createDataContext from './createDataContext';

const locationReducer = (state,action) => {
    switch(action.type) {
        case 'change_name':
            return {...state, name: action.payload};
        case 'start_recording':
            return { ...state, recording: true };
        case 'stop_recording':
            return { ...state, recording: false };
        case 'add_location':
            return{...state,Locations:[...state.Locations, action.payload]};
        case 'add_c_location':
            return{...state,currentLocation: action.payload}  
        default:
            return state;
    }
};

const changeName = dispatch => (name)=>{
    dispatch({type:'change_name', payload:name});
};

const startRecording = dispatch => () => {
    console.log('started');
    dispatch({type:'start_recording'});
};
const stopRecording = dispatch => () => {
    console.log('stoped');
    dispatch({type:'stop_recording'});
};
const addLocation = dispatch => (location, recording) => {
    dispatch({type:'add_c_location', payload:location});
    if(recording) {
        console.log('recording');
        dispatch ({type:'add_location', payload:location});
    }
};


export const {Context,Provider} = createDataContext(
    locationReducer,
    { startRecording,stopRecording,addLocation, changeName},
    { name:'', recording: false, locations:[], currentLocation: null }
);