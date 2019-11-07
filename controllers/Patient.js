const Patient = require('../models/Patient');
const httpStatus = require('http-status')
module.exports={
    get:async (req,res,next)=>{
        try {
            const patients=await Patient.find(req.body);
            res.status(200).json(patients);
        } catch (error) {
            res.status(httpStatus.FORBIDDEN).json({error:"server error"});  
        }
    },
    store: async(req,res,next)=>{
        try {
             const patient=new Patient(req.body);
             await patient.save((error, datos)=> {
                 if(error){
                    res.status("400").json({error});
                 }else{
                    res.status("200").json(datos);
                 }         
             });
        } catch (error) {
            res.status("400").json({error});  
        }
    },
    update:async(req,res,next)=>{
        try {
            const {id}=req.params;
            const newPatient=req.body;
            await Patient.findByIdAndUpdate({_id:id},newPatient);
            res.status(200).json({success:true});
        } catch (error) {
            res.status("400").json({error});  
        }
    },
    del:async(req,res,next)=>{
        try {
            const {id}=req.params;
            await Patient.deleteOne({ _id: id });
            res.status(200).json({success:true});
        } catch (error) {
            res.status("400").json({error});  
        }
    }
}