const validateRequest=(schema)=>(req,res,next)=>{
    try {
        const data={};
        if(schema.shape?.body) data.body=req.body;
        if(schema.shape?.query) data.query=req.query;
        if(schema.shape?.params) data.body=req.params;
        
        schema.parse(data)
      next()
    } catch (error) {
        throw error;
    }
}

module.exports=validateRequest;