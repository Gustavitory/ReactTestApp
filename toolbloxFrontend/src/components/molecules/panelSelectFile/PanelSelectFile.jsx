import React from 'react'
import { SelectFile } from '../../atoms/selectFile/SelectFile'
import './PanelSelectFile.css'

export const PanelSelectFile = ({files}) => {
    
  return (
    <ul className='PanelSelectFileCont'>
        {
            files.map(file=>{
                return (
                    <li key={file}>
                        <SelectFile  fileName={file}/>
                    </li>
                )
            })
        }
    </ul>
  )
}
