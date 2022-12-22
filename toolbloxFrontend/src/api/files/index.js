const getConfig={
    method:'GET',
    headers:{
        'accept':'application/json'
    }
}

export const chargeFilesData=async (name)=>{
    try{
        const data=await fetch(`http://localhost:3001/files/data${name?'?fileName='+name:''}`,getConfig)
        const format=await data.json();
        return format
    }catch{}
}

export const chargeFiles=async()=>{
    try{
        const data=await fetch(`http://localhost:3001/files/list`,getConfig)
        const format=await data.json();
        return format
    }catch{}
}
