const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const signup = async(req,res) => {
    const{email, password} =req.body;
    try {
            const user = new User({email,password});
            await user.save();
            const token = jwt.sign({userId:user._id},'MY_USER_KEY');
            res.send({token});
        } 
    catch (err) {return res.status(422).send(err.message);}
}

const firstlook = (req,res)=>{ res.send(`Hi there! Your email: ${req.user.email}`); }

const signin = async (req,res) => {
    const{email, password} =req.body;
    if(!email || !password) {return res.status(422).send({error:'Must provide email and password'})};
    const user = await User.findOne({email});
    if(!user) {return res.status(404).send({error:'Email not Found'});}

    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId:user._id},'MY_USER_KEY');
        res.send({token});
    } catch (err) {
        return res.status(422).send({error:'Invalid Email or Password'});
    }
}

module.exports = {
    signup,
    firstlook,
    signin
}