const mongoose = require('mongoose');
const Track = mongoose.model('Track');

const track = async(req,res)=>{
    const tracks = await Track.find({userId: req.user._id})
    res.send(tracks);
}

const trackPost = async(req,res)=>{
    const { name , locations} = req.body;
    if(!name|| !locations) { return res.status(422).send({error:'You must provide a name and locations.'})}
    
    try {
        const track = new Track({name,locations, userId: req.user._id});
        await track.save();
        res.send(track);
    } catch (err) {
        return res.status(422).send({ error: err.message });
    }
}
 
module.exports={
    track, trackPost
}