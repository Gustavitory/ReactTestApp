import  { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { chargeFiles, chargeFilesData } from '../api/files';
import { addFiles, addLines } from '../redux/reducer';

export const usePrechargeData = () => {
    const dispatch=useDispatch();
    const {selected,files,lines}=useSelector(state=>state.filesReducer)
  useEffect(()=>{
    const chargeData=async()=>{
        const filesData=await chargeFilesData(selected);
        const files=await chargeFiles();
        Promise.all([filesData,files])
        .then(result=>{
          if(selected){
            dispatch(addLines(result[0]))
          }
          dispatch(addFiles(result[1]))
        })
      }
      chargeData();
  },[selected,dispatch])
  return {
    selected,files,lines
  }
}
