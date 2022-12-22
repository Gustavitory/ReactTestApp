import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { XIcon } from '../../atoms/x/X';
import './Table.css'

export const TableLines = ({data}) => {
    const [info,setInfo]=useState([])
    useEffect(()=>{
        if(data.length && data[0].lines.length){
            setInfo(data[0].lines)
        }else setInfo([])
    },[data])
    useEffect(()=>{
        console.log(info)
    },[info])

  return (
    <div>
        {
        info.length ?
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map(line=>{
                            return(
                                <tr>
                                    <td>{line.text}</td>
                                    <td>{line.number}</td>
                                    <td>{line.hex}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            :
            <div className='noSelection'>
                <p>Este archivo se encuentra vacío.</p>
                <XIcon/>
            </div>
    }
    </div>
  )
}
