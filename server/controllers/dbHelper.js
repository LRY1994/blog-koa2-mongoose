exports.Check = (query)=>{
    return new Promise((resolve,reject)=>{
        let result;
        query.exec(function (err, res) {
            if (err) {
                result = 'code.err'
                reject(result)
            } else {
                if(res==null){
                    result = 'code.none';
                   
                }else{
                    result = 'code.ok' 
                }  
                console.log(`res:${res}`);
                resolve(result)          
            }
    })
})
}

exports.Exec = (obj)=>{
    return new Promise((resolve,reject)=>{
        let result;
        obj.exec(function (err, res) {
            if (err) {               
                result = 'code.err'
                reject(result)
            } else {   
                result = res;                 
                console.log(`res:${res}`);
                resolve(result)          
            }
    })
})
}

exports.Save = (obj)=>{
    return new Promise((resolve,reject)=>{
        let result;
        obj.save(function (err, res) {
            if (err) {
                result = 'code.err'
                reject(result)
            } else {               
                result = 'code.ok'                 
                console.log(`res:${res}`);
                resolve(result)          
            }
    })
})
}



