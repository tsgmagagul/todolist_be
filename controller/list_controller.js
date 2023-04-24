//CRUD - Create, Read, Update Delete
const ListModel = require('../models/list_models');
const catchAsync = require('../utils/catchAsync');


//CREATE USER
exports.createList = catchAsync(async(req, res)=>{
    let data =
    {
        user_id: req.body.user_id,
        title: req.body.title,
        descripion: req.body.descripion,
    
    
    }
    console.log(data)    
    const user = await ListModel.create(data);

    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "list Created Successfully",
        user
    })
});


exports.getList = catchAsync(async(req, res, next)=>{
    const user  = await ListModel.findAll()
    if(!user){
        return next(new Error(' not list found!'))
    }
    else
     return res.send(user);
});


    
    exports.updateUser = catchAsync(async(req,res , next ) =>{
           req.body.UserId =req.user.UserId;
        
          const user = await ListModel.update(req.body, {where: { UserId:req.user.UserId}});
          if(!user){
               return next(new Error('Users not found!'));
           }
        
          res.status(200).json({
         status: "success",
        message:"Profile successfully updated"
        
         });
        
        });
        
        exports.DeleteUser = catchAsync(async(req,res, next)=>{
        
        const list = await ListModel.destroy(req.body , {where: {UserId:req.user.UserId}})
        
        
        res.status(200).json({
           status: "success",
            message:"Profile successfully Deleted"
            
         });
        });

