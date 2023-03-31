const asyncHandler = require("express-async-handler");
const userModel = require("../model/userModel")
const generateToken = require("../config/generateToken");
//const userRouter = require("../Routes/userRouter");

module.exports.registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, isTeacher} = req.body;
    
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter All The Fields");
    }

    const userExist = await userModel.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error("User Already Exist");
    }

    const user = await userModel.create({
        name, email, password, isTeacher
    })

    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isTeacher : user.isTeacher,
            token : generateToken(user._id),
        })
    }

    else{
        res.status(400);
        throw new Error('User not created');
    }
})


module.exports.authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({ email });

    if(user && (await user.matchPassword(password))){
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isTeacher : user.isTeacher,
            token : generateToken(user._id),
        })
    }

    else{
        res.status(400);
        throw new Error('User not created');
    }
})


// module.exports.allUser = asyncHandler(async (req,res) => {
//     const keyWord = req.query.search ? 
//     {
//         $or: [
//           { name: { $regex: req.query.search, $options: "i" } },
//           { email: { $regex: req.query.search, $options: "i" } },
//         ],
//     }
//     : {};

//     const users = await userRouter.find(keyWord).find({ _id: { $ne: req.user._id } });
//     res.send(users);
// })