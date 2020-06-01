import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { NoteContext } from '../Context/NoteContext';

const CreateNoteScreen = ({navigation})=>{
    const {state,dispatch} = useContext(NoteContext)

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    return(
        <View style={{flex:1, margin:8}}>
            <Text style={{fontSize:20}}>Enter Tittle</Text>
            <TextInput 
            style={styles.input}
            value={title}
            onChangeText={(text)=>setTitle(text)}
            />

            <Text style={{fontSize:20}}>Enter Content</Text>
            <TextInput 
            style={styles.input}
            value={content}
            onChangeText={(text)=>setContent(text)}
            numberOfLines={15}
            multiline={true}
            />

            <TouchableOpacity
            style={{
                backgroundColor:'#00aaff',
                padding:5,
                marginHorizontal:40,
                borderRadius:30
            }}


            onPress={()=>{
                dispatch({type:"ADD",payload:{title,content}})
                navigation.goBack()
            }}
            >
                <Text style={{fontSize:25, color:'white',textAlign:'center'}}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"#00aaff",
        marginVertical:8

    }
})

export default CreateNoteScreen;