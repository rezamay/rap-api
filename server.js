const express = require('express');
const app = express();
const PORT = 8000

const rappers = {
    '21 Savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'Unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api', (request,response)=>{
    constRapperName = request.params.name.toLowerCase()
    If ( rappers[rapperName] ){
        response.json(rappers[rappername])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}! Best go get!`)
})

