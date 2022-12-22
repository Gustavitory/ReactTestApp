import {createSlice} from '@reduxjs/toolkit'


const slice=createSlice({
    name:'files',
    initialState:{
        files:[],
        lines:[],
        selected:''
    },
    reducers:{
        addFiles(state,action){
            return {
                ...state,
                files:action.payload
            }
        },
        addLines(state,action){
            return {
                ...state,
                lines:action.payload
            }
        },
        selectFile(state,action){
            return {
                ...state,
                selected:action.payload
            }
        }
    }
})

export const {addFiles,addLines,selectFile}=slice.actions;
export default slice.reducer;