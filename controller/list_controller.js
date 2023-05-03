//CRUD - Create, Read, Update Delete
const ListModel = require('../modules/list_models');
const catchAsync = require('../utils/catchAsync');


//CREATE USER
exports.createList = catchAsync(async(req, res)=>{
    let data =
    {
        list_id: req.body.list_id,
        title: req.body.title,
        descripion: req.body.descripion,
    
    
    }
    console.log(data)    
    const list = await ListModel.create(data);

    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "list Created Successfully",
        list
    })
});


exports.getList = catchAsync(async(req, res, next)=>{
    const list  = await ListModel.findAll()
    if(!list){
        return next(new Error(' list not found!'))
    }
    else
     return res.send(list);
});


    
    exports.updateList = catchAsync(async(req,res , next ) =>{
           req.body.list_Id =req.list.list_Id;
        
          const list = await ListModel.update(req.body, {where: {list_Id:req.list.list_Id}});
          if(!list){
               return next(new Error('item not found!'));
           }
        
          res.status(200).json({
         status: "success",
        message:"Item successully updated"
        
         });
        
        });
        
        exports.DeleteList = catchAsync(async(req,res)=>{
        
        const list = await ListModel.destroy(req.body , {where: {list_Id:req.list.list_Id}})
        
        
        res.status(200).json({
           status: "success",
            message:"List successfully Deleted"
            
         });
        });

