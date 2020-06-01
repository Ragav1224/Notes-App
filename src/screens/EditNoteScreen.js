import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { NoteContext } from '../Context/NoteContext';

const EditNoteScreen = ({navigation,route})=>{
    const {id} = route.params;
    const {state,dispatch} = useContext(NoteContext)

    const particularNote = state.find((record)=>{
        return record.id===id
    })

    const [title,setTitle] = useState(particularNote.title)
    const [content,setContent] = useState(particularNote.content)

    return(
        <View style={{flex:1, margin:8}}>
            <Text style={{fontSize:20}}>Update Tittle</Text>
            <TextInput 
            style={styles.input}
            value={title}
            onChangeText={(text)=>setTitle(text)}
            />

            <Text style={{fontSize:20}}>Update Content</Text>
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
                dispatch({type:"UPDATE",payload:{id,title,content}})
                navigation.navigate("Notes")
            }}
            >
                <Text style={{fontSize:25, color:'white',textAlign:'center'}}>Update</Text>
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

export default EditNoteScreen;