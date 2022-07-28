import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user.interface";

const INITIAL_STATE: IUser[] = [
    { name:'', cpf:'', address:'', password:'', email:''} 
]

const dataSlice = createSlice({
    name: 'data',
    initialState: INITIAL_STATE,
    reducers: {
        addData(state: any, { payload }: PayloadAction<IUser>){
            return [...state, {name: payload.name, cpf:payload.cpf, address:payload.cpf}]
        }
    }
})

export default dataSlice.reducer
export const { addData } = dataSlice.actions;
export const useData = (state:any) => {
    return state.data as IUser[]
}

//Payload => Informações que virão
//Reducers => Funções para mudar o estado
//Action => São fontes de informações que são enviadas da aplicação para o store pelos reducers. 