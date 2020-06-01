import React, { createContext,useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NoteReducer,initialState} from '../reducer/NoteReducer'

export const NoteContext = createContext()

export const NotesProvider = ({children})=>{
    const [state,dispatch] = useReducer(NoteReducer,initialState)
    return(
        // <NoteContext.Provider value={{state:state,dispatch:dispatch}}>
        <NoteContext.Provider value={{state,dispatch}}>
            {children}
        </NoteContext.Provider>
    )
}