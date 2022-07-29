import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../interfaces/menu.interface";

const INITIAL_STATE: IMenu = {} as IMenu

const MenuSlice = createSlice({
    name: 'menu',
    initialState: INITIAL_STATE,
    reducers: {
        notLogged(state: IMenu) {
            return {...state,  login: 'Login', linkLogin: '/login', deslogar: false}
        },

        logged(state: IMenu){
            return {...state,  login: 'Minha conta', linkLogin: '/myaccount', deslogar: true}
        }
    }
})

export default MenuSlice.reducer
export const { notLogged, logged } = MenuSlice.actions
export const useMenu = (state: any) => {
    return state.menu as IMenu
}