const express = require('express');
const mongoose = require('mongoose');

const app = express();
// const mongoUri = 'mongodb+srv://admin:admin@cluster1.qc2mh.mongodb.net/test?retryWrites=true&w=majority';
const mongoUri = 'mongodb://admin:admin@cluster1-shard-00-00.qc2mh.mongodb.net:27017,cluster1-shard-00-01.qc2mh.mongodb.net:27017,cluster1-shard-00-02.qc2mh.mongodb.net:27017/test?ssl=true&replicaSet=atlas-147g1s-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', ()=>{console.log('connected to mongoDB.')});
mongoose.connection.on('error', (err)=>{console.error('mongoDB: connection error:',err)});




app.get('/',(req,res)=>{
    res.send('Hi there!');
});

app.listen(3000,()=>{
    console.log('listening on port 3000');
})