let express = require('express');
let app = express();

app.get('/', function(req,res){
    res.send('primeira rota com Express');
})

app.listen(3000,function(){
    console.log('a aplicação esta funcionando na porta 3000')
})