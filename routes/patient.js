const router = require('express').Router();
const {get,store,update,del}=require('../controllers/Patient');

router.get('/:find',get);
router.post('/',store);
router.put('/:id',update);
router.delete('/:id',del);
router.get('post/:params',del);


module.exports=router;

