const fs = require('fs');
 fs.readFile('data.txt','utf8',(err,data)=>{
    if(err){
        console.log("error resding file",err);
        return;
    }
    else{
        console.log(data);
    }
});

