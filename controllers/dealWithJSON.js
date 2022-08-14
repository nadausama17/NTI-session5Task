const filesystem = require('fs');

const readFromJSON = ()=>{
    let data;
    try{
        data = JSON.parse(filesystem.readFileSync('data.json'));
    }catch(e){
        data = [];
    }
    return data;
}

const writeToJSON = (data)=>{
    filesystem.writeFileSync('data.json',JSON.stringify(data));
}

module.exports = {readFromJSON,writeToJSON};