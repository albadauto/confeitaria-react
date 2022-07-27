import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../interfaces/menu.interface";

const INITIAL_STATE: IMenu = { login: 'Login', linkLogin:'/login' }

const MenuSlice = createSlice({
    name:'menu',
    initialState: INITIAL_STATE,
    reducers:{
        verifyLoginMenu(state: any){
            if (localStorage.getItem("token")){
                return {...state, login: 'Minha conta', linkLogin: '/myaccount' }
            }
        }
    }
})

export default MenuSlice.reducer
export const { verifyLoginMenu } = MenuSlice.actions
export const useMenu = (state: any) => {
    return state.menu as IMenu
}