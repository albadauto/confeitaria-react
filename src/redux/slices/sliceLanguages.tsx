import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ILang{
    name: string;
    favorite: boolean;
}

const INITIAL_STATE: ILang[] = [
    { name: 'Java', favorite: false },
    { name: 'C#', favorite: false },
    { name: 'Javascript', favorite: false }

]

const sliceLanguages = createSlice({
    name: 'languages',
    initialState: INITIAL_STATE,
    reducers: {
        addLanguages(state: any, { payload }: PayloadAction<string>){
            return [...state, {name: payload, favorite: false}]
        }
    }
})

export default sliceLanguages;
export const { addLanguages } = sliceLanguages.actions;
export const useLanguages = (state: any) =>{
    return state.languages as ILang[]
}