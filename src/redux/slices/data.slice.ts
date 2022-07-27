import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../interfaces/user.interface";

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

//Payload => Informações que virão
//Reducers => Funções para mudar o estado
//Action => São fontes de informações que são enviadas da aplicação para o store pelos reducers. 