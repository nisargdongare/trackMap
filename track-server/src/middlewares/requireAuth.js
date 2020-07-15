const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = (req,res,next) => {
    const {authorization} = req.headers;
    if(!authorization) {
        return res.status(401).send({error: 'You must be Logged in.'})
    }
    const token = authorization.replace('abc ', '');
    jwt.verify(token,'MY_USER_KEY', async (err,payload)=> {
        if(err){
            console.log(err.message);
            return res.status(401).send({error: 'Invalid token'});
        }
 
        const {userId} = payload;
        const user = await User.findById(userId);
        req.user = user;
        next();
    });
}; 