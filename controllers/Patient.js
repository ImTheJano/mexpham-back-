const Patient = require('../models/Patient');
const httpStatus = require('http-status')
module.exports={
    get:async (req,res,next)=>{
        try {
            filter=JSON.parse(req.params.find)
            const patients=await Patient.find(filter);
            res.status(200).json(patients);
        } catch (error) {
            res.status(httpStatus.FORBIDDEN).json({error:"server error"});  
        }
    },
    storeByGet: async(req,res,next)=>{
        const{patient}=req.params
        req.body=JSON.parse(patient)
        
        try {
            const _patient=new Patient(req.body);
            await _patient.save((error, datos)=> {
                if(error){
                //    res.status("400").json({error});
                   console.log(error);
                   ;
                }else{
                   res.status("200").json(datos);
                }         
            });
       } catch (error) {
           console.log(error);
            
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
    storeBtGet: async(req,res,next)=>{
        const {p}=req.params;
        req.body=JSON.parse(p)
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
            console.log(newPatient);
            
            let patient=await Patient.findOneAndUpdate({codigoVerificador:id},newPatient,{new:true});
            res.status(200).json({success:true,patient});
        } catch (error) {
            console.log(error);
            ;  
        }
    },
    del:async(req,res,next)=>{
        try {
            const {id}=req.params;
            await Patient.deleteOne({ codigoVerificador: id });            
            res.status(200).json({success:true});
        } catch (error) {
            res.status("400").json({error});  
        }
    }
}