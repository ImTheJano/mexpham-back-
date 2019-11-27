const router = require('express').Router();
const {get,store,update,del,storeByGet}=require('../controllers/Patient');

router.get('/post/:patient',storeByGet)
router.get('/:find',get);
router.post('/',store);
router.put('/:id',update);
router.delete('/:id',del);

module.exports=router;

