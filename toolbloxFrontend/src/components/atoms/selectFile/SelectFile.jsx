import React from 'react'
import './SelectFile.css'
import {useDispatch,useSelector} from 'react-redux'
import { selectFile } from '../../../redux/reducer'
export const SelectFile = ({fileName}) => {
  const dispatch=useDispatch()
  const {selected}=useSelector(state=>state.filesReducer)
  return (
    <div onClick={()=>dispatch(selectFile(fileName))} className={`selectFile${selected===fileName?' selectFileActive':''}`}>
        <p>{fileName}</p>
    </div>
  )
}
