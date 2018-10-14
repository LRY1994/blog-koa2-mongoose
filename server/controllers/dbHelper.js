exports.Check = (query)=>{
    return new Promise((resolve,reject)=>{
        let result;
        query.exec(function (err, res) {
            console.log(`err:${err}`)
            if (err) {
                result = 'code.err'
                reject(result)
            } else {
                if(res==null){
                    result = 'code.none';
                   
                }else{
                    result = 'code.ok' 
                }  
                resolve(result)          
            }
    })
})
}

exports.Exec = (obj)=>{
    return new Promise((resolve,reject)=>{
        let result;
        obj.exec(function (err, res) {
            console.log(`err:${err}`)
            if (err) {               
                result = 'code.err'
                reject(result)
            } else {   
                result = res;                 
                resolve(result)          
            }
    })
})
}

exports.Save = (obj)=>{
    return new Promise((resolve,reject)=>{
        let result;
        obj.save(function (err, res) {
            console.log(`err:${err}`)
            if (err) {
                result = 'code.err'
                reject(result)
            } else {               
                result = 'code.ok'                 
                resolve(result)          
            }
    })
})
}



