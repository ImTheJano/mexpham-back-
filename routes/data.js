var express = require('express');
var router = express.Router();

router.post('/write',(req, res, next)=> {
  const fs = require('fs');
  if(req.body.db){
    var db=req.body.db
    console.log('Post: ',db);
    fs.writeFile("./data.json",JSON.stringify(db,null,'\t'),function (err) {
      if (err) {
        console.log('error: ',err.stack);
        res.status(500).send(err.json);
      }
    });
    res.status(200).send({db:db});
  }
  else{
    res.status(200).send('nothing done')
  }
});

router.get('/read', (req, res, next)=> {
  const fs = require('fs');
  var content = fs.readFileSync("data.json", "utf8");
  res.json({data:JSON.parse(content)});
});

module.exports = router;