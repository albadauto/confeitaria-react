import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initializeConnect } from "react-redux/es/components/connect";

interface IData{
    name: string;
    cpf: string;
    address: string;
}

const INITIAL_STATE: IData[] = [
    { name:'', cpf:'', address:''} 
]

const dataSlice = createSlice({
    name: 'data',
    initialState: INITIAL_STATE,
    reducers: {
        addData(state: any, { payload }: PayloadAction<IData>){
            return [...state, {name: payload.name, cpf:payload.cpf, address:payload.cpf}]
        }
    }
})

export default dataSlice.reducer
export const { addData } = dataSlice.actions;
export const useData = (state:any) => {
    return state.data as IData[]
}