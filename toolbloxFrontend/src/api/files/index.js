const getConfig={
    method:'GET',
    headers:{
        'accept':'application/json'
    }
}

const url='https://csvtojson.onrender.com';
//const url='http://localhost:3001';

export const chargeFilesData=async (name)=>{
    try{
        const data=await fetch(`${url}/files/data${name?'?fileName='+name:''}`,getConfig)
        const format=await data.json();
        return format
    }catch{}
}

export const chargeFiles=async()=>{
    try{
        const data=await fetch(`${url}/files/list`,getConfig)
        const format=await data.json();
        return format
    }catch{}
}
