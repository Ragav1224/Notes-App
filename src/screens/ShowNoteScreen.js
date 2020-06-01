import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { NoteContext } from '../Context/NoteContext';
import { Foundation } from '@expo/vector-icons';


const ShowNoteScreen = ({route,navigation}) =>{
    const {id} = route.params
    const {state} = useContext(NoteContext)
    const note = state.find((record)=>{
        return record.id==id
    })

    return(
        <View style={{
            flex:1,
            marginTop:10
        }}>

        <View style={{
                justifyContent:'center',
                alignItems:'flex-end'
            }}>
                <TouchableOpacity 
                style={{
                    borderRadius:15,
                    width:80,
                    height:40,
                    borderRadius:50,
                    alignItems:'center',
                    justifyContent:'center'
                }}

                onPress={()=>navigation.navigate("Edit",{id})}

                >
                    <Foundation name="page-edit" size={35} color="#00aaff" />
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>


            <Text style={style.titleStyle}>{note.title}</Text>
            <Text style={style.contentStyle}>{note.content}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    titleStyle:{
        fontSize:28,
        textAlign:'center',
        fontWeight:'bold'
    },
    contentStyle:{
        fontSize:18,
        margin:10

    }
})

export default ShowNoteScreen;