const fetch=require ('node-fetch');

const getConfig={
    method:'GET',
        headers:{
            'Authorization':'Bearer aSuperSecretKey',
            'accept':'application/json'
        }
}
const getCsvConfig={
    method:'GET',
        headers:{
            'Authorization':'Bearer aSuperSecretKey',
            'content-type': 'text/csv;charset=UTF-8'
        }
}
function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = {file:lines[1].split(',')[0],lines:[]}
    const headers = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')
        if(currentline.length!==headers.length)
            continue
        for (let j = 1; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.lines.push(obj)
    }
    return result
}
const individualFileCharge=async (name,index)=>{
        try {
        const response = await fetch(`https://echo-serv.tbxnet.com/v1/secret/file/${name}`, getCsvConfig);
        if(response.status===200){
            const text=await response.text();
            const form=csvJSON(text);
            return form
        }else return 'no'
    } catch {
        return 'no';
    }
}
const filesCharge=async (req,res,next)=>{
    try{
        const {fileName}=req.query
        let dataNames=await fetch(`https://echo-serv.tbxnet.com/v1/secret/files`,getConfig)
        let {files}=await dataNames.json();
        let promises=files.map((el,i)=>individualFileCharge(el,i))
        let allResults=await Promise.all(promises)
        .then((array)=>array.filter((el)=>el!=='no'))
        if(fileName){
            allResults=allResults.filter(el=>el.file===fileName)
        }
        res.setHeader('content-type','application/json')
        res.send(JSON.stringify(allResults));
    }catch{(err)=>res.status(500).send({message:'Error en el servidor, estamos trabajando para solucionarlo',success:false,error:err})}
}

const filesList=async (req,res,next)=>{
    try{
        let dataNames=await fetch(`https://echo-serv.tbxnet.com/v1/secret/files`,getConfig)
        let {files}=await dataNames.json();
        res.send(files);
    }catch{(err)=>res.status(500).send({message:'Error en el servidor, estamos trabajando para solucionarlo',success:false,error:err})}
}

module.exports={filesCharge,filesList}