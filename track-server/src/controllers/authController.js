const signup = (req,res) => {
    res.send('You made a post request.');
}

const firstlook = (req,res)=>{
    res.send('Hi there!');
}


module.exports = {
    signup,
    firstlook,
}