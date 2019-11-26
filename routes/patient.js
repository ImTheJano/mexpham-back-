const router = require('express').Router();
const {get,store,update,del,storeByGet}=require('../controllers/Patient');

router.get('/:find',get);
router.post('/',store);
router.put('/:id',update);
router.delete('/:id',del);
router.get('post/:params',storeByGet);


module.exports=router;

